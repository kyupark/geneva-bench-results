// Gentle filmic grade applied after Cesium's own rendering: a touch of
// contrast and saturation, warm highlights / cool shadows and a soft vignette.
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';

const GRADE_GLSL = /* glsl */ `
uniform sampler2D colorTexture;
uniform float contrast;
uniform float saturation;
uniform float vignette;
uniform vec3 shadowTint;
uniform vec3 highlightTint;
in vec2 v_textureCoordinates;

void main() {
  vec4 c = texture(colorTexture, v_textureCoordinates);
  vec3 col = c.rgb;
  col = (col - 0.5) * contrast + 0.5;
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, saturation);
  float hl = smoothstep(0.25, 0.85, l);
  col *= mix(shadowTint, highlightTint, hl);
  vec2 uv = (v_textureCoordinates - 0.5) * vec2(1.0, 0.8);
  col *= 1.0 - vignette * smoothstep(0.25, 0.75, length(uv));
  out_FragColor = vec4(clamp(col, 0.0, 1.0), c.a);
}
`;

export function addGrade(scene, opts = {}) {
  const stage = new Cesium.PostProcessStage({
    name: 'geneva_grade',
    fragmentShader: GRADE_GLSL,
    uniforms: {
      contrast: opts.contrast ?? 1.06,
      saturation: opts.saturation ?? 1.08,
      vignette: opts.vignette ?? 0.22,
      shadowTint: opts.shadowTint ?? new Cesium.Cartesian3(0.98, 0.99, 1.03),
      highlightTint: opts.highlightTint ?? new Cesium.Cartesian3(1.02, 1.0, 0.975),
    },
  });
  scene.postProcessStages.add(stage);
  return stage;
}
