// Animated water surface over the lake and the Rhône.
//
// The orthophoto already shows the true water colour; this adds a thin,
// mostly transparent layer with moving ripples, sky reflection at grazing
// angles and sun glints. Polygons come from OpenStreetMap (data/water.json,
// built by scripts/build-water.mjs) and sit a few centimetres above the
// terrain's water surface, so the terrain itself masks any overlap on land.
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';
import { ECEF_TO_ENU_ROT, ORIGIN_ECEF } from './geo.js';

const WATER_GLSL = /* glsl */ `
uniform sampler2D normalMap;
uniform float time;
uniform float waveScale;
uniform float roughness;
uniform float glint;
uniform vec4 waterColor;
uniform vec4 skyColor;
uniform vec3 camOffset;
uniform mat3 ecefToEnu;

// Four scrolling octaves of the normal map. Unlike czm_getWaterNoise this
// relies on REPEAT wrapping instead of fract(), which would break mipmapping
// with a visible seam wherever the coordinates wrap.
vec2 rippleSlope(vec2 uv, float t) {
  vec2 uv0 = uv / 103.0 + t * vec2(1.0 / 17.0, 0.0);
  vec2 uv1 = uv / 107.0 + t * vec2(-1.0 / 29.0, 0.0) + 0.23;
  vec2 uv2 = uv / vec2(897.0, 983.0) + t * vec2(1.0 / 101.0, 1.0 / 59.0) + 0.51;
  vec2 uv3 = uv / vec2(991.0, 877.0) + t * vec2(-1.0 / 109.0, -1.0 / 57.0) + 0.71;
  vec4 n = texture(normalMap, uv0) + texture(normalMap, uv1)
         + texture(normalMap, uv2) + texture(normalMap, uv3);
  return ((n / 4.0) - 0.5).xy * 2.0;
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);

  // Precise local position (camera-relative, see buildings.js).
  vec3 relWC = czm_inverseViewRotation * (-materialInput.positionToEyeEC);
  vec3 p = ecefToEnu * (relWC + camOffset);
  float dist = length(materialInput.positionToEyeEC);

  vec2 slope = rippleSlope(p.xy * (103.0 / waveScale), time);
  // Calm the ripples with distance so far water stays quiet.
  float k = roughness * (1.0 - 0.7 * smoothstep(300.0, 2500.0, dist));
  vec3 nTS = normalize(vec3(slope * k, 1.0));
  vec3 nEC = normalize(materialInput.tangentToEyeMatrix * nTS);

  vec3 V = normalize(materialInput.positionToEyeEC);
  float ndv = clamp(dot(V, nEC), 0.0, 1.0);
  float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);

  vec3 L = normalize(czm_lightDirectionEC);
  vec3 R = reflect(-L, nEC);
  float s = max(dot(R, V), 0.0);
  float spec = (pow(s, 600.0) * 2.5 + pow(s, 80.0) * 0.12) * glint;

  vec3 col = mix(waterColor.rgb, skyColor.rgb, clamp(fresnel * 1.3, 0.0, 1.0));
  material.diffuse = vec3(0.0);
  material.specular = 0.0;
  material.emission = col + vec3(1.0, 0.97, 0.9) * spec;
  material.alpha = clamp(waterColor.a + fresnel * skyColor.a + spec, 0.0, 1.0);
  return material;
}
`;

async function loadNormalTexture(scene) {
  const image = await Cesium.Resource.fetchImage({
    url: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
  });
  const texture = new Cesium.Texture({
    context: scene.context,
    source: image,
    sampler: new Cesium.Sampler({
      wrapS: Cesium.TextureWrap.REPEAT,
      wrapT: Cesium.TextureWrap.REPEAT,
      minificationFilter: Cesium.TextureMinificationFilter.LINEAR_MIPMAP_LINEAR,
      magnificationFilter: Cesium.TextureMagnificationFilter.LINEAR,
      maximumAnisotropy: 8,
    }),
  });
  texture.generateMipmap();
  return texture;
}

export async function createWater(scene, { url = './data/water.json', offset = 0.12 } = {}) {
  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) return null;
  const data = await res.json();

  const toPositions = (ring) => ring.map(([lon, lat]) => Cesium.Cartesian3.fromDegrees(lon, lat));
  const instances = [];
  for (const poly of [...data.lake, ...data.river]) {
    const hierarchy = new Cesium.PolygonHierarchy(
      toPositions(poly.outer),
      poly.holes.map((h) => new Cesium.PolygonHierarchy(toPositions(h))),
    );
    instances.push(
      new Cesium.GeometryInstance({
        geometry: new Cesium.PolygonGeometry({
          polygonHierarchy: hierarchy,
          height: poly.level + offset,
          vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
          granularity: Cesium.Math.toRadians(0.01),
        }),
      }),
    );
  }

  const material = new Cesium.Material({
    fabric: {
      type: 'GenevaWater',
      uniforms: {
        // Replaced below by a mipmapped, repeating texture; the string only
        // tells Material that this uniform is a sampler2D.
        normalMap: Cesium.Material.DefaultImageId,
        time: 0.0,
        waveScale: 38.0,
        roughness: 0.32,
        glint: 1.0,
        waterColor: new Cesium.Color(0.05, 0.17, 0.21, 0.1),
        skyColor: new Cesium.Color(0.68, 0.79, 0.9, 0.5),
        camOffset: new Cesium.Cartesian3(),
        // Material only infers mat3 from a plain 9-element (column-major) array.
        ecefToEnu: Cesium.Matrix3.toArray(ECEF_TO_ENU_ROT),
      },
      source: WATER_GLSL,
    },
    translucent: true,
  });
  material.uniforms.normalMap = await loadNormalTexture(scene);

  const primitive = scene.primitives.add(
    new Cesium.Primitive({
      geometryInstances: instances,
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        material,
        aboveGround: true,
        translucent: true,
        faceForward: true,
      }),
      asynchronous: false,
      shadows: Cesium.ShadowMode.DISABLED,
    }),
  );

  const scratch = new Cesium.Cartesian3();
  scene.preRender.addEventListener(() => {
    Cesium.Cartesian3.subtract(scene.camera.positionWC, ORIGIN_ECEF, scratch);
    material.uniforms.camOffset = Cesium.Cartesian3.clone(scratch, material.uniforms.camOffset);
  });

  return {
    primitive,
    material,
    update(t) {
      material.uniforms.time = t * 0.7;
    },
  };
}
