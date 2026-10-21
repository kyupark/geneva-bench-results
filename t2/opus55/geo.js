// Geographic constants for the Geneva flythrough.
//
// Heights follow the swisstopo terrain / swissBUILDINGS3D convention: the
// tiles store metres above sea level (not WGS84 ellipsoidal heights), so the
// lake surface sits at ~372 m and everything here uses that same datum.
import * as Cesium from 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/index.js';

export const LAKE_LEVEL = 372.15;

// Local frame origin: Cathédrale Saint-Pierre at lake level.
export const ORIGIN = { lat: 46.201095, lon: 6.148496, h: LAKE_LEVEL };

// Landmarks (OpenStreetMap positions; ground heights from swisstopo terrain).
export const PLACES = {
  jet: { lat: 46.207381, lon: 6.155889, ground: 372.4 },
  paquis: { lat: 46.210355, lon: 6.154185, ground: 372.6 },
  phare: { lat: 46.209998, lon: 6.156929, ground: 372.6 },
  montBlancBridge: { lat: 46.20593, lon: 6.148654, ground: 374.9 },
  ileRousseau: { lat: 46.205882, lon: 6.147733, ground: 374.0 },
  horloge: { lat: 46.204185, lon: 6.150981, ground: 374.5 },
  brunswick: { lat: 46.208458, lon: 6.148963, ground: 375.5 },
  cathedral: { lat: 46.201095, lon: 6.148496, ground: 400.7 },
  bourgDeFour: { lat: 46.200327, lon: 6.148999, ground: 396.0 },
  hotelDeVille: { lat: 46.20083, lon: 6.146757, ground: 398.0 },
  reformationWall: { lat: 46.200226, lon: 6.14592, ground: 381.0 },
  bastions: { lat: 46.199397, lon: 6.145347, ground: 380.6 },
  placeNeuve: { lat: 46.201072, lon: 6.144003, ground: 380.4 },
  grandTheatre: { lat: 46.20178, lon: 6.142628, ground: 381.0 },
  museeRath: { lat: 46.201751, lon: 6.143507, ground: 381.0 },
  cornavin: { lat: 46.2096, lon: 6.1424, ground: 384.3 },
  placeNations: { lat: 46.222207, lon: 6.13837, ground: 407.0 },
  brokenChair: { lat: 46.222804, lon: 6.138849, ground: 407.5 },
  palais: { lat: 46.2266, lon: 6.1405, ground: 417.3 },
};

const originCartesian = Cesium.Cartesian3.fromDegrees(ORIGIN.lon, ORIGIN.lat, ORIGIN.h);
export const ENU_TO_ECEF = Cesium.Transforms.eastNorthUpToFixedFrame(originCartesian);
export const ECEF_TO_ENU = Cesium.Matrix4.inverseTransformation(ENU_TO_ECEF, new Cesium.Matrix4());
export const ECEF_TO_ENU_ROT = Cesium.Matrix3.transpose(
  Cesium.Matrix4.getMatrix3(ENU_TO_ECEF, new Cesium.Matrix3()),
  new Cesium.Matrix3(),
);
export const ORIGIN_ECEF = originCartesian;

// lat/lon/height (sea-level metres) -> local ENU metres around ORIGIN.
export function toLocal(lat, lon, h) {
  const c = Cesium.Cartesian3.fromDegrees(lon, lat, h);
  const l = Cesium.Matrix4.multiplyByPoint(ECEF_TO_ENU, c, new Cesium.Cartesian3());
  return [l.x, l.y, l.z];
}

export function localToEcef(x, y, z, result = new Cesium.Cartesian3()) {
  return Cesium.Matrix4.multiplyByPoint(ENU_TO_ECEF, new Cesium.Cartesian3(x, y, z), result);
}

// Place reference -> local coordinates at a given height above that place's ground.
export function at(name, above = 0, dx = 0, dy = 0) {
  const p = PLACES[name];
  const [x, y, z] = toLocal(p.lat, p.lon, p.ground + above);
  return [x + dx, y + dy, z];
}
