// ------------------------------------------------------------------
// Geneva, measured for arcade driving.
// Landmark coordinates are real WGS84 positions. The map preserves
// their true relative bearings and distances (1 world unit = 10 m).
// ------------------------------------------------------------------

export const ORIGIN = { lat: 46.206, lon: 6.148 };
const LAT_M = 111_320;
const LON_M = 111_320 * Math.cos((ORIGIN.lat * Math.PI) / 180);
export const UNITS_PER_M = 0.1;

export function toWorld(lat, lon) {
  return {
    x: (lon - ORIGIN.lon) * LON_M * UNITS_PER_M,
    z: -(lat - ORIGIN.lat) * LAT_M * UNITS_PER_M,
  };
}

export function haversineM(a, b) {
  const R = 6_371_000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function worldDistance(a, b) {
  return Math.hypot(a.x - b.x, a.z - b.z);
}

// Real landmark coordinates, geocoded from OpenStreetMap.
const RAW = [
  {
    id: 'cornavin', name: 'Gare Cornavin', short: 'Cornavin', icon: '🚉',
    lat: 46.2092770, lon: 6.1423753, color: '#f0c93a', district: 'SAINT-GERVAIS',
    blurb: 'Where every Geneva story starts. Mind the pigeons.',
    request: 'Gare Cornavin, s’il vous plaît — my train leaves in ten minutes!',
  },
  {
    id: 'chair', name: 'Broken Chair', short: 'Broken Chair', icon: '🪑',
    lat: 46.2228038, lon: 6.1388488, color: '#c0884f', district: 'NATIONS',
    blurb: 'Twelve metres of wooden chair, one leg short and impossible to miss.',
    request: 'The Broken Chair, please. I have a peace protest to catch.',
  },
  {
    id: 'bains', name: 'Bains des Pâquis', short: 'Les Bains', icon: '🛁',
    lat: 46.2099336, lon: 6.1565303, color: '#ee6f57', district: 'PÂQUIS',
    blurb: 'Swim, sauna, fondue. Geneva’s favourite lakeside hangout.',
    request: 'Bains des Pâquis — I need a dip before my meeting.',
  },
  {
    id: 'pont', name: 'Pont du Mont-Blanc', short: 'Mont-Blanc', icon: '🌉',
    lat: 46.2058842, lon: 6.1487233, color: '#e7d4b4', district: 'CENTRE',
    blurb: 'The grand stone bridge where the city meets the lake.',
    request: 'Drop me on the Pont du Mont-Blanc. The view is the destination.',
  },
  {
    id: 'jet', name: 'Jet d’Eau', short: 'Jet d’Eau', icon: '⛲',
    lat: 46.2073807, lon: 6.1558891, color: '#48c5e8', district: 'RIVE',
    blurb: '140 metres of lake water fired straight at the sky.',
    request: 'Jet d’Eau, vite! I want to feel the spray.',
  },
  {
    id: 'jardin', name: 'Jardin Anglais', short: 'Jardin Anglais', icon: '🌷',
    lat: 46.2042967, lon: 6.1521733, color: '#4fbd71', district: 'RIVE',
    blurb: 'Flower clock, lakeside lawns and a very good ice cream stop.',
    request: 'Jardin Anglais, please. The flower clock is waiting.',
  },
  {
    id: 'belair', name: 'Place Bel-Air', short: 'Bel-Air', icon: '🏙️',
    lat: 46.2043264, lon: 6.1431747, color: '#e8913a', district: 'CITÉ',
    blurb: 'Old Geneva’s busy little crossroads.',
    request: 'Place Bel-Air. I’m late for a café on the corner.',
  },
  {
    id: 'oldtown', name: 'Old Town', short: 'Old Town', icon: '⛪',
    lat: 46.2018975, lon: 6.1456151, color: '#bb8d5f', district: 'CITÉ',
    blurb: 'Cobbles, cathedrals and hidden courtyards.',
    request: 'Old Town, by the cathedral. I’m meeting a ghost.',
  },
  {
    id: 'neuve', name: 'Place de Neuve', short: 'Place de Neuve', icon: '🎭',
    lat: 46.2010578, lon: 6.1433758, color: '#9f7ae0', district: 'CITÉ',
    blurb: 'Theatre, statues and city energy.',
    request: 'Place de Neuve — I have tickets for the Grand Théâtre!',
  },
  {
    id: 'bastions', name: 'Parc des Bastions', short: 'Les Bastions', icon: '🌳',
    lat: 46.1993939, lon: 6.1453019, color: '#3e9f58', district: 'BASTIONS',
    blurb: 'The Reformation Wall and the city’s biggest lawn.',
    request: 'Parc des Bastions. I need some grass under my feet.',
  },
];

export const LANDMARKS = RAW.map((l) => {
  const pos = toWorld(l.lat, l.lon);
  return { ...l, position: { x: pos.x, z: pos.z } };
});

export const LANDMARK_BY_ID = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));

// A safe spot on the pavement / deck where the fare waits.
export const STAND_OFFSETS = {
  cornavin: [-2.8, 1.6], chair: [3.6, 3.4], bains: [-1.7, -1.7], pont: [-4.0, 5.8],
  jet: [-2.4, 1.9], jardin: [4.6, 2.6], belair: [3.8, 2.6], oldtown: [-3.0, 2.5],
  neuve: [3.6, 2.8], bastions: [2.8, 2.6],
};
for (const l of LANDMARKS) {
  const off = STAND_OFFSETS[l.id] || [0, 0];
  l.stand = { x: l.position.x + off[0], z: l.position.z + off[1] };
}


export function realDistance(a, b) {
  return haversineM(a, b);
}

// Approximate driving streets, hand-traced over the real city layout.
// type: street | bridge | pier | wood. major roads get wider sidewalks.
export const ROADS = [
  {
    id: 'mont-blanc-quay', name: 'Quai du Mont-Blanc', major: true, width: 10.5,
    points: [[-24, -55], [2, -57], [28, -59], [58, -60], [88, -61], [120, -61]],
  },
  {
    id: 'bains-pier', name: 'Jetée des Pâquis', width: 7.5, type: 'pier',
    points: [[65.7, -60], [65.7, -55], [65.7, -43.8]],
  },
  {
    id: 'nations-avenue', name: 'Avenue de la Paix', major: true, width: 11,
    points: [[-55, -104], [-52, -128], [-58, -159], [-66, -177], [-70, -180]],
  },
  {
    id: 'nation-loop', name: 'Place des Nations', width: 9, type: 'plaza',
    points: [[-70, -180], [-58, -184], [-58, -194], [-68, -199], [-72, -186], [-70, -180]],
  },
  {
    id: 'gare-artery', name: 'Rue de Lausanne', major: true, width: 10,
    points: [[-45, -36], [-64, -42], [-73, -58], [-66, -82], [-55, -104]],
  },
  {
    id: 'rue-mont-blanc', name: 'Rue du Mont-Blanc', major: true, width: 9.5,
    points: [[5.8, -17], [-10, -24], [-26, -30], [-45, -36]],
  },
  {
    id: 'gare-lake', name: 'Rue de Chantepoulet', width: 8,
    points: [[-45, -36], [-30, -39], [-15, -48], [2, -57]],
  },
  {
    id: 'pont-mont-blanc', name: 'Pont du Mont-Blanc', width: 12, type: 'bridge', major: true,
    points: [[5.8, -16], [5.8, 0], [5.8, 18]],
  },
  {
    id: 'rives-quay', name: 'Quai des Bergues', major: true, width: 9,
    points: [[5.8, 18], [-14, 17.5], [-34, 18.5], [-53, 22], [-76, 28]],
  },
  {
    id: 'gustave-ador', name: 'Quai Gustave-Ador', major: true, width: 9.5,
    points: [[5.8, 18], [18, 20], [32, 20.5], [50, 24], [74, 30], [102, 31], [136, 30]],
  },
  {
    id: 'jet-pier', name: 'Jetée du Jet d’Eau', width: 7.2, type: 'pier',
    points: [[52, 25], [55, 14], [57, 2], [60.8, -15.4]],
  },
  {
    id: 'belair-corraterie', name: 'Rue de la Corraterie', major: true, width: 8.5,
    points: [[-34, 18.5], [-37, 29], [-39, 41], [-36, 55]],
  },
  {
    id: 'belair-oldtown', name: 'Grand-Rue', width: 7.5,
    points: [[-34, 18.5], [-28, 28], [-22, 37], [-18.4, 45.7]],
  },
  {
    id: 'oldtown-neuve', name: 'Rue de l’Hôtel-de-Ville', width: 7,
    points: [[-18.4, 45.7], [-25, 49], [-31, 52], [-36, 55]],
  },
  {
    id: 'neuve-bastions', name: 'Promenade des Bastions', major: true, width: 8.5,
    points: [[-36, 55], [-30, 62], [-24, 68], [-21, 73.5], [-19, 82]],
  },
  {
    id: 'oldtown-bastions', name: 'Rue de la Croix-Rouge', width: 7,
    points: [[-18.4, 45.7], [-13, 53], [-12, 62], [-17, 70], [-21, 73.5]],
  },
  {
    id: 'oldtown-jardin', name: 'Rue de la Cité', width: 8,
    points: [[-18.4, 45.7], [-13, 39], [-6, 34], [9, 31], [22, 25], [32, 20.5]],
  },
  {
    id: 'neuve-jardin', name: 'Rue de la Tertasse', width: 7.5,
    points: [[-36, 55], [-20, 48], [-5, 38], [14, 28], [32, 20.5]],
  },
  {
    id: 'saint-gervais', name: 'Rue du Rhône', width: 8,
    points: [[-10, -24], [-15, -8], [-14, 6], [-18, 17.5]],
  },
  {
    id: 'coulouvreniere', name: 'Pont de la Coulouvrenière', width: 9, type: 'bridge',
    points: [[-47, 13], [-43, 19], [-39, 23]],
  },
  {
    id: 'gare-belair', name: 'Rue de la Coulouvrenière', width: 8.5,
    points: [[-45, -36], [-56, -26], [-61, -12], [-58, 2], [-53, 9], [-47, 13], [-43, 19], [-34, 18.5]],
  },
  {
    id: 'plainpalais', name: 'Boulevard du Théâtre', width: 7.5,
    points: [[-43, 19], [-57, 30], [-66, 44], [-65, 60], [-55, 74], [-40, 82], [-19, 82]],
  },
  {
    id: 'paquis-grid-1', name: 'Rue de la Navigation', width: 7,
    points: [[-12, -51], [1, -31], [15, -17], [30, -6]],
  },
  {
    id: 'paquis-grid-2', name: 'Rue de Berne', width: 7,
    points: [[28, -59], [27, -44], [24, -30], [30, -6]],
  },
  {
    id: 'paquis-grid-4', name: 'Rue de Lausanne Nord', width: 6.5,
    points: [[88, -61], [86, -44], [88, -27], [95, -13]],
  },
  {
    id: 'paquis-cross', name: 'Rue du Léman', width: 6,
    points: [[-9, -36], [24, -34], [55, -34], [86, -34], [112, -24]],
  },
  {
    id: 'rive-grid-1', name: 'Rue du Stand', width: 7,
    points: [[32, 20.5], [31, 38], [33, 56], [35, 76]],
  },
  {
    id: 'rive-grid-3', name: 'Boulevard des Philosophes', width: 7,
    points: [[74, 30], [76, 46], [78, 66], [83, 86]],
  },
  {
    id: 'rive-cross', name: 'Rue de la Corraterie Est', width: 6,
    points: [[-36, 55], [8, 51], [42, 48], [74, 48], [110, 44]],
  },
  {
    id: 'rive-cross-2', name: 'Rue de la Dôle', width: 6,
    points: [[-19, 82], [12, 78], [46, 76], [82, 78], [112, 74]],
  },
  {
    id: 'bastions-loop', name: 'Parc des Bastions Loop', width: 6, type: 'plaza',
    points: [[-21, 73.5], [-4, 74], [-2, 88], [-20, 94], [-39, 88], [-38, 76], [-21, 73.5]],
  },
  {
    id: 'neuve-west', name: 'Rue de la Corraterie Ouest', width: 6.5,
    points: [[-36, 55], [-48, 56], [-63, 55], [-77, 48]],
  },
  {
    id: 'plainpalais-cross', name: 'Rue du Conseil-Général', width: 6,
    points: [[-65, 44], [-45, 45], [-20, 48], [10, 51]],
  },
];

// Extra playable surfaces that don't render as ordinary asphalt.
export const PIER_BRIDGE_NAMES = ['Pont du Mont-Blanc', 'Jetée des Pâquis', 'Jetée du Jet d’Eau', 'Pont de la Coulouvrenière'];

// World bounds (roughly the technical baseplate).
export const BOUNDS = { minX: -122, maxX: 160, minZ: -228, maxZ: 108 };

export const WATER = {
  lake: [
    [12, -49], [38, -51], [70, -52], [108, -53], [154, -60], [192, -73],
    [206, 20], [199, 58], [160, 60], [128, 48], [96, 37], [76, 30],
    [52, 17], [34, 9], [20, 10], [12, 11],
  ],
  river: [
    [13, -5], [-18, -2], [-45, 2], [-78, 6], [-112, 9], [-142, 10],
    [-142, 25], [-110, 23], [-76, 20], [-46, 15], [-18, 11], [13, 8],
  ],
};

export const PLACES = {
  start: { x: -22, z: -27.5, heading: -1.12 },
  spawnClear: { x: -22, z: -27.5 },
};

// A few arcade kickers, positioned on open roads.
export const RAMPS = [
  { x: 15, z: -58, heading: Math.PI / 2, width: 5.4 },
  { x: -2, z: 77.5, heading: Math.PI / 2, width: 4.8 },
];

export const TRAFFIC_ROUTES = [
  { points: [[-24, -55], [-7, -56], [10, -57], [28, -59]], speed: 5.5, offset: 0.0 },
  { points: [[-64, -42], [-73, -58], [-66, -82]], speed: 4.6, offset: 0.4 },
  { points: [[74, 34], [76, 48], [78, 68]], speed: 4.0, offset: 0.7 },
];

export const RANKS = [
  { min: 0, name: 'ROOKIE BRICK', blurb: 'Not bad for a first shift. Geneva has seen worse drivers. Not many, but some.' },
  { min: 250, name: 'BRICK CABBIE', blurb: 'You know the shortcuts, the quays and which café has the quickest espresso. Solid shift.' },
  { min: 600, name: 'LAKE CITY PRO', blurb: 'The passengers are talking. The trams are jealous. This is proper Geneva taxi work.' },
  { min: 1000, name: 'CRAZY LEGEND', blurb: 'They will build a tiny yellow statue of you on the Pont du Mont-Blanc. Probably with a stud on top.' },
  { min: 1600, name: 'GVA MAYOR OF CHAOS', blurb: 'The lake is still rippling from that last handbrake turn. Absolute brick royalty.' },
];
