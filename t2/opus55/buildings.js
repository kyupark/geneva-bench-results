// Building look: swissBUILDINGS3D ships untextured with pink roofs and olive
// walls. Roofs get the SWISSIMAGE orthophoto draped on them, walls get a
// procedural facade (plaster colours, window grid with glass reflections).
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';
import { ECEF_TO_ENU_ROT, ORIGIN_ECEF, localToEcef } from './geo.js';

const FACADE_GLSL = /* glsl */ `
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

// Anti-aliased box pulse on [a, b] with filter width w.
float aaBox(float x, float a, float b, float w) {
  w = max(w, 1e-4);
  return clamp((x - a) / w + 0.5, 0.0, 1.0) - clamp((x - b) / w + 0.5, 0.0, 1.0);
}

vec3 facadePalette(float h) {
  // Typical Geneva facade tones: limestone, sandstone, cream and grey plaster.
  vec3 c0 = vec3(0.82, 0.74, 0.60);
  vec3 c1 = vec3(0.76, 0.68, 0.55);
  vec3 c2 = vec3(0.86, 0.81, 0.71);
  vec3 c3 = vec3(0.72, 0.68, 0.60);
  vec3 c4 = vec3(0.85, 0.75, 0.57);
  vec3 c5 = vec3(0.80, 0.70, 0.62);
  vec3 c6 = vec3(0.66, 0.63, 0.57);
  vec3 c7 = vec3(0.88, 0.85, 0.78);
  float k = h * 8.0;
  if (k < 1.0) return c0;
  if (k < 2.0) return c1;
  if (k < 3.0) return c2;
  if (k < 4.0) return c3;
  if (k < 5.0) return c4;
  if (k < 6.0) return c5;
  if (k < 7.0) return c6;
  return c7;
}

void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
  vec3 relWC = czm_inverseViewRotation * fsInput.attributes.positionEC;
  vec3 p = u_ecefToEnu * (relWC + u_camOffset);
  vec3 n = normalize(u_ecefToEnu * (czm_inverseViewRotation * fsInput.attributes.normalEC));

  float id = float(fsInput.featureIds.featureId_0);
  float h = hash11(id * 1.618 + u_tileSeed);

  // Anything tilted more than ~10° from vertical is roof (Geneva has many steep mansards).
  float roofness = smoothstep(0.12, 0.28, abs(n.z));
  bool facingDown = n.z < -0.5;

  // ---- walls -------------------------------------------------------------
  vec3 base = facadePalette(h);
  base *= mix(0.93, 1.05, hash11(id * 3.17 + 1.3));

  vec2 hn = normalize(n.xy + vec2(1e-5));
  vec2 tangent = vec2(-hn.y, hn.x);
  float u = dot(p.xy, tangent);
  float v = p.z;

  float bay = mix(2.7, 3.5, hash11(id * 5.3 + 2.1));
  float storey = mix(3.0, 3.5, hash11(id * 7.1 + 4.2));
  vec2 cell = vec2(u / bay, (v - 0.6) / storey);
  vec2 f = fract(cell);
  vec2 fw = fwidth(cell);

  float ww = mix(0.36, 0.56, hash11(id * 9.7 + 0.4));
  float wh = mix(0.48, 0.62, hash11(id * 2.9 + 7.7));
  float win = aaBox(f.x, 0.5 - 0.5 * ww, 0.5 + 0.5 * ww, fw.x * 1.5)
            * aaBox(f.y, 0.30, 0.30 + wh, fw.y * 1.5);
  // Shutters / sills: a thin lighter band under each window.
  float sill = aaBox(f.x, 0.5 - 0.55 * ww, 0.5 + 0.55 * ww, fw.x * 1.5)
             * aaBox(f.y, 0.26, 0.30, fw.y * 1.5);

  // Fade the pattern into its average where it would alias.
  float fade = smoothstep(0.18, 0.5, max(fw.x, fw.y));
  float avgWin = ww * wh;
  win = mix(win, avgWin * 0.85, fade);
  sill = mix(sill, 0.0, fade);
  // Windows only on truly vertical walls (not on spires or steep roof faces).
  float vertical = 1.0 - smoothstep(0.06, 0.14, abs(n.z));
  win *= vertical;
  sill *= vertical;

  // Glass: dark with a slight sky tint that brightens at grazing angles.
  vec3 viewDir = normalize(-fsInput.attributes.positionEC);
  vec3 nEC = normalize(fsInput.attributes.normalEC);
  float fres = pow(1.0 - clamp(dot(viewDir, nEC), 0.0, 1.0), 4.0);
  vec3 glass = mix(vec3(0.09, 0.11, 0.14), vec3(0.42, 0.52, 0.62), fres * 0.8 + 0.08);

  vec3 wall = mix(base, glass, win) + sill * 0.08;

  // ---- roofs -------------------------------------------------------------
  // High-resolution orthophoto mosaic of the flight area; outside it, the
  // imagery Cesium drapes per tile (coarser) or a plain roof colour.
  vec2 roofUv = vec2(dot(u_roofU, vec3(p.xy, 1.0)), dot(u_roofV, vec3(p.xy, 1.0)));
  vec2 inside = step(vec2(0.001), roofUv) * step(roofUv, vec2(0.999));
  float useMosaic = inside.x * inside.y * u_hasRoofTex;
  // A top-down photo smears across steep roof faces; sample a blurrier mip there.
  float steepBias = 3.0 * (1.0 - smoothstep(0.55, 0.85, abs(n.z)));
  vec3 mosaic = texture(u_roofTex, clamp(roofUv, 0.0, 1.0), steepBias).rgb;

  vec3 roof = material.diffuse;
  if (u_hasImagery < 0.5) {
    roof = mix(vec3(0.55, 0.36, 0.30), vec3(0.42, 0.42, 0.44), step(0.55, h));
  }
  roof = mix(roof, mosaic, useMosaic);
  if (u_hasImagery > 0.5 || useMosaic > 0.5) {
    // Orthophoto roofs come out pale under direct sun: darken a little and
    // restore some saturation and contrast.
    float l = dot(roof, vec3(0.299, 0.587, 0.114));
    roof = mix(vec3(l), roof, u_roofSat);
    roof = (roof - 0.5) * 1.08 + 0.5;
    roof = clamp(roof * u_roofGain, 0.0, 1.0);
  }

  vec3 color = mix(wall, roof, roofness);
  if (facingDown) color = base * 0.35;

  material.diffuse = color;
  material.specular = vec3(mix(0.03, 0.06, win * (1.0 - roofness)));
  material.roughness = mix(0.9, 0.22, win * (1.0 - roofness));
  // Small ambient lift so walls facing away from the sun keep their colour.
  material.emissive = color * u_lift;
}
`;

export function createBuildingShader({
  hasImagery = true,
  lift = 0.0,
  roof = null,
  roofGain = 0.78,
  roofSat = 1.3,
} = {}) {
  const roofTex = roof
    ? new Cesium.TextureUniform({
        url: roof.image,
        repeat: false,
        minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR,
        magnificationFilter: Cesium.TextureMagnificationFilter.LINEAR,
        maximumAnisotropy: 8,
      })
    : new Cesium.TextureUniform({ typedArray: new Uint8Array([128, 128, 128, 255]), width: 1, height: 1 });
  const shader = new Cesium.CustomShader({
    mode: Cesium.CustomShaderMode.MODIFY_MATERIAL,
    lightingModel: Cesium.LightingModel.PBR,
    uniforms: {
      u_lift: { type: Cesium.UniformType.FLOAT, value: lift },
      u_roofGain: { type: Cesium.UniformType.FLOAT, value: roofGain },
      u_roofSat: { type: Cesium.UniformType.FLOAT, value: roofSat },
      u_roofTex: { type: Cesium.UniformType.SAMPLER_2D, value: roofTex },
      u_roofU: { type: Cesium.UniformType.VEC3, value: roof ? roof.U : new Cesium.Cartesian3() },
      u_roofV: { type: Cesium.UniformType.VEC3, value: roof ? roof.V : new Cesium.Cartesian3() },
      u_hasRoofTex: { type: Cesium.UniformType.FLOAT, value: roof ? 1 : 0 },
      u_ecefToEnu: { type: Cesium.UniformType.MAT3, value: Cesium.Matrix3.clone(ECEF_TO_ENU_ROT) },
      u_camOffset: { type: Cesium.UniformType.VEC3, value: new Cesium.Cartesian3() },
      u_hasImagery: { type: Cesium.UniformType.FLOAT, value: hasImagery ? 1 : 0 },
      u_tileSeed: { type: Cesium.UniformType.FLOAT, value: 0.37 },
    },
    fragmentShaderText: FACADE_GLSL,
  });
  return shader;
}

// True once the roof mosaic texture has been uploaded (or none is used).
export function roofTextureReady(shader, scene) {
  if (!shader.uniforms.u_hasRoofTex.value) return true;
  const tex = shader._textureManager?.getTexture('u_roofTex');
  return Boolean(tex) && tex !== scene.context.defaultTexture;
}

// Affine map from local ENU (x, y) to texture coordinates of a Web-Mercator
// tile mosaic (see scripts/build-roof-mosaic.mjs). Fitted by least squares;
// over a few kilometres the residual stays well below a pixel.
export function fitMosaicMapping(meta, extent) {
  const size = 256 * 2 ** meta.z;
  const rows = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      const x = extent.x0 + ((extent.x1 - extent.x0) * i) / 8;
      const y = extent.y0 + ((extent.y1 - extent.y0) * j) / 8;
      const c = Cesium.Cartographic.fromCartesian(localToEcef(x, y, 0));
      const lon = Cesium.Math.toDegrees(c.longitude);
      const lat = c.latitude;
      const X = ((lon + 180) / 360) * size;
      const Y = ((1 - Math.log(Math.tan(lat) + 1 / Math.cos(lat)) / Math.PI) / 2) * size;
      const u = (X - meta.x0 * 256) / (meta.nx * 256);
      const v = 1 - (Y - meta.y0 * 256) / (meta.ny * 256); // textures are flipped on upload
      rows.push([x, y, u, v]);
    }
  }
  const solve = (k) => {
    // Normal equations for [a b c] in a*x + b*y + c.
    const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const b = [0, 0, 0];
    for (const r of rows) {
      const f = [r[0], r[1], 1];
      for (let i = 0; i < 3; i++) {
        b[i] += f[i] * r[k];
        for (let j = 0; j < 3; j++) A[i][j] += f[i] * f[j];
      }
    }
    // Gaussian elimination.
    for (let i = 0; i < 3; i++) {
      let p = i;
      for (let r = i + 1; r < 3; r++) if (Math.abs(A[r][i]) > Math.abs(A[p][i])) p = r;
      [A[i], A[p]] = [A[p], A[i]];
      [b[i], b[p]] = [b[p], b[i]];
      for (let r = i + 1; r < 3; r++) {
        const m = A[r][i] / A[i][i];
        for (let c = i; c < 3; c++) A[r][c] -= m * A[i][c];
        b[r] -= m * b[i];
      }
    }
    const s = [0, 0, 0];
    for (let i = 2; i >= 0; i--) {
      let acc = b[i];
      for (let c = i + 1; c < 3; c++) acc -= A[i][c] * s[c];
      s[i] = acc / A[i][i];
    }
    return s;
  };
  const U = solve(2), V = solve(3);
  let maxErr = 0;
  for (const r of rows) {
    const du = (U[0] * r[0] + U[1] * r[1] + U[2] - r[2]) * meta.nx * 256;
    const dv = (V[0] * r[0] + V[1] * r[1] + V[2] - r[3]) * meta.ny * 256;
    maxErr = Math.max(maxErr, Math.hypot(du, dv));
  }
  return {
    U: new Cesium.Cartesian3(U[0], U[1], U[2]),
    V: new Cesium.Cartesian3(V[0], V[1], V[2]),
    maxErrorPx: maxErr,
  };
}

// Keep the camera-relative offset uniform current (double precision on CPU).
export function updateShaderCamera(shader, camera) {
  const off = Cesium.Cartesian3.subtract(camera.positionWC, ORIGIN_ECEF, new Cesium.Cartesian3());
  shader.setUniform('u_camOffset', off);
}
