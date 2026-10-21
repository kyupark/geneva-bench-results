// Cesium viewer with swisstopo terrain, SWISSIMAGE orthophoto, buildings and
// trees, tuned for offline frame-by-frame rendering.
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';
import {
  createBuildingShader,
  updateShaderCamera,
  fitMosaicMapping,
  roofTextureReady,
} from './buildings.js';

export async function createScene(container, opts = {}) {
  const {
    msaa = 4,
    sunTime = '2026-08-20T13:10:00Z',
    shadows = true,
    ao = false,
    buildingSSE = 6,
    treeSSE = 6,
    globeSSE = 1.25,
    drape = true,
    trees: withTrees = true,
    hdr = false,
    lift = 0.0,
    envBrightness = 1.0,
    sunIntensity = 2.2,
    shadowDarkness = 0.45,
    roofMosaic = true,
    roofGain = 0.78,
    roofSat = 1.3,
  } = opts;
  const environmentMapOptions = { brightness: envBrightness };

  // The local server speaks HTTP/2, so many parallel tile requests are cheap.
  Cesium.RequestScheduler.maximumRequests = 256;
  Cesium.RequestScheduler.maximumRequestsPerServer = 160;

  const viewer = new Cesium.Viewer(container, {
    baseLayer: false,
    animation: false,
    timeline: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    infoBox: false,
    selectionIndicator: false,
    useDefaultRenderLoop: false,
    useBrowserRecommendedResolution: true,
    scene3DOnly: true,
    msaaSamples: msaa,
    // Weighted OIT darkens dense stacks of translucent spray particles.
    orderIndependentTranslucency: false,
    shadows,
    terrainShadows: Cesium.ShadowMode.RECEIVE_ONLY,
    contextOptions: { webgl: { preserveDrawingBuffer: true, powerPreference: 'high-performance' } },
  });
  const scene = viewer.scene;
  viewer.cesiumWidget.creditContainer.style.display = 'none';

  // --- terrain ----------------------------------------------------------
  const terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl('https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/', {
    requestVertexNormals: true,
    requestMetadata: true,
  });
  scene.terrainProvider = terrainProvider;

  // --- imagery ----------------------------------------------------------
  const swissimage = new Cesium.UrlTemplateImageryProvider({
    url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg',
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    minimumLevel: 7,
    maximumLevel: 20,
    rectangle: Cesium.Rectangle.fromDegrees(5.5, 45.6, 10.8, 48.0),
    credit: '© swisstopo',
  });
  const imageryLayer = viewer.imageryLayers.addImageryProvider(swissimage);
  imageryLayer.saturation = 1.08;
  imageryLayer.contrast = 1.06;
  imageryLayer.gamma = 1.0;

  const globe = scene.globe;
  globe.baseColor = Cesium.Color.fromCssColorString('#5d6b55');
  globe.maximumScreenSpaceError = globeSSE;
  globe.tileCacheSize = 1500;
  globe.preloadSiblings = false;
  globe.depthTestAgainstTerrain = true;
  globe.enableLighting = true;
  globe.dynamicAtmosphereLighting = true;
  globe.dynamicAtmosphereLightingFromSun = true;
  globe.showGroundAtmosphere = true;
  globe.lightingFadeOutDistance = 1e9;
  globe.lightingFadeInDistance = 1e9;
  globe.nightFadeOutDistance = 1e9;
  globe.nightFadeInDistance = 1e9;
  globe.atmosphereLightIntensity = 10.0;

  // --- buildings --------------------------------------------------------
  const buildings = await Cesium.Cesium3DTileset.fromUrl('https://3d.geo.admin.ch/ch.swisstopo.swissbuildings3d.3d/v1/tileset.json', {
    maximumScreenSpaceError: buildingSSE,
    cacheBytes: 1024 * 1024 * 1024,
    maximumCacheOverflowBytes: 512 * 1024 * 1024,
    shadows: shadows ? Cesium.ShadowMode.ENABLED : Cesium.ShadowMode.DISABLED,
    dynamicScreenSpaceError: false,
    foveatedScreenSpaceError: false,
    preloadWhenHidden: true,
    loadSiblings: false,
    environmentMapOptions,
  });
  scene.primitives.add(buildings);
  if (drape) {
    buildings.imageryLayers.add(
      new Cesium.ImageryLayer(
        new Cesium.UrlTemplateImageryProvider({
          url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg',
          tilingScheme: new Cesium.WebMercatorTilingScheme(),
          minimumLevel: 7,
          maximumLevel: 20,
          rectangle: Cesium.Rectangle.fromDegrees(5.5, 45.6, 10.8, 48.0),
        }),
      ),
    );
  }
  let roof = null;
  if (roofMosaic) {
    try {
      const [meta, extent] = await Promise.all([
        fetch('./data/roofs.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)),
        fetch('./data/minimap.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)),
      ]);
      if (meta && extent) {
        const m = fitMosaicMapping(meta, extent);
        console.log(`roof mosaic ${meta.nx * 256}x${meta.ny * 256}, fit error ${m.maxErrorPx.toFixed(2)} px`);
        roof = { image: meta.image, U: m.U, V: m.V };
      }
    } catch (err) {
      console.warn('roof mosaic unavailable', err);
    }
  }
  const buildingShader = createBuildingShader({ hasImagery: drape, lift, roof, roofGain, roofSat });
  buildings.customShader = buildingShader;

  // --- trees ------------------------------------------------------------
  let trees = null;
  if (withTrees) {
    trees = await Cesium.Cesium3DTileset.fromUrl('https://3d.geo.admin.ch/ch.swisstopo.vegetation.3d/v1/tileset.json', {
      maximumScreenSpaceError: treeSSE,
      cacheBytes: 512 * 1024 * 1024,
      maximumCacheOverflowBytes: 256 * 1024 * 1024,
      shadows: shadows ? Cesium.ShadowMode.ENABLED : Cesium.ShadowMode.DISABLED,
      dynamicScreenSpaceError: false,
      foveatedScreenSpaceError: false,
      preloadWhenHidden: true,
      environmentMapOptions,
    });
    trees.customShader = new Cesium.CustomShader({
      mode: Cesium.CustomShaderMode.MODIFY_MATERIAL,
      lightingModel: Cesium.LightingModel.PBR,
      fragmentShaderText: /* glsl */ `
        void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
          vec3 c = material.diffuse;
          float l = dot(c, vec3(0.299, 0.587, 0.114));
          c = mix(vec3(l), c, 0.85) * vec3(1.02, 1.08, 0.92) * 1.15;
          material.diffuse = c;
          material.roughness = 0.95;
          material.specular = vec3(0.02);
        }`,
    });
    scene.primitives.add(trees);
  }

  // --- light, sky, atmosphere --------------------------------------------
  viewer.clock.currentTime = Cesium.JulianDate.fromIso8601(sunTime);
  viewer.clock.shouldAnimate = false;
  scene.light = new Cesium.SunLight({ intensity: sunIntensity });
  scene.highDynamicRange = hdr;
  scene.fog.enabled = true;
  scene.fog.density = 1.6e-4;
  scene.fog.minimumBrightness = 0.08;
  scene.skyAtmosphere.show = true;
  scene.skyAtmosphere.atmosphereLightIntensity = 14.0;
  scene.skyAtmosphere.hueShift = 0.0;
  scene.skyAtmosphere.saturationShift = -0.05;
  scene.skyAtmosphere.brightnessShift = 0.05;
  scene.sun.show = true;
  scene.moon.show = false;
  scene.skyBox.show = false;
  scene.backgroundColor = Cesium.Color.fromCssColorString('#9fb7cf');

  if (shadows) {
    const sm = scene.shadowMap;
    sm.softShadows = true;
    sm.size = 4096;
    sm.darkness = shadowDarkness;
    sm.maximumDistance = 1600.0;
    sm.normalOffset = true;
    sm.fadingEnabled = true;
  }

  if (ao) {
    const aoStage = scene.postProcessStages.ambientOcclusion;
    aoStage.enabled = true;
    aoStage.uniforms.intensity = 2.2;
    aoStage.uniforms.bias = 0.12;
    aoStage.uniforms.lengthCap = 0.03;
    aoStage.uniforms.stepSize = 1.0;
    aoStage.uniforms.blurStepSize = 0.86;
    aoStage.uniforms.ambientOcclusionOnly = false;
  }
  scene.postProcessStages.fxaa.enabled = false;

  // --- camera -------------------------------------------------------------
  const camera = scene.camera;
  camera.frustum.fov = Cesium.Math.toRadians(opts.fov ?? 70);
  camera.frustum.near = 1.0;
  scene.screenSpaceCameraController.enableCollisionDetection = false;

  scene.preRender.addEventListener(() => updateShaderCamera(buildingShader, camera));

  function loadStatus() {
    return {
      globe: globe.tilesLoaded,
      buildings: buildings.tilesLoaded,
      trees: !trees || trees.tilesLoaded,
      roofs: roofTextureReady(buildingShader, scene),
    };
  }

  function tilesLoaded() {
    const s = loadStatus();
    return s.globe && s.buildings && s.trees && s.roofs;
  }

  // Render repeatedly until every tile needed for the current view has
  // arrived (or the timeout hits), then render the final frame.
  async function settle({ maxMs = 120000, minFrames = 2, stableFrames = 2 } = {}) {
    const t0 = performance.now();
    let stable = 0;
    let frames = 0;
    let renderMs = 0;
    const timedRender = () => {
      const r0 = performance.now();
      viewer.render();
      renderMs += performance.now() - r0;
    };
    while (performance.now() - t0 < maxMs) {
      timedRender();
      frames++;
      stable = tilesLoaded() ? stable + 1 : 0;
      if (stable >= stableFrames && frames >= minFrames) break;
      await new Promise((r) => setTimeout(r, frames < 4 ? 0 : 8));
    }
    timedRender();
    const status = loadStatus();
    const complete = status.globe && status.buildings && status.trees && status.roofs;
    if (!complete) {
      const st = (ts) =>
        ts && {
          pending: ts.statistics.numberOfPendingRequests,
          processing: ts.statistics.numberOfTilesProcessing,
          attempted: ts.statistics.numberOfAttemptedRequests,
          mem: Math.round(ts.totalMemoryUsageInBytes / 1048576),
        };
      status.b = st(buildings);
      status.t = st(trees);
    }
    return {
      ms: performance.now() - t0,
      frames,
      renderMs,
      complete,
      ...(complete ? {} : { status }),
    };
  }

  return { viewer, scene, camera, globe, buildings, trees, terrainProvider, settle, tilesLoaded, loadStatus };
}
