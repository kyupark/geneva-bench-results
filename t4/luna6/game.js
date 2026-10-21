/* Brick Cab: Geneva Run — a small, coordinate-grounded arcade driving game. */
(function () {
  "use strict";

  var ORIGIN_LAT = 46.21;
  var ORIGIN_LON = 6.147;
  var METERS_PER_DEGREE = 111320;
  var LON_SCALE = Math.cos(ORIGIN_LAT * Math.PI / 180) * METERS_PER_DEGREE;

  var places = [
    { name: "Gare Cornavin", short: "CORNAVIN", label: "GARE CORNAVIN", lat: 46.210217, lon: 6.142447, kind: "station" },
    { name: "Broken Chair", short: "BROKEN CHAIR", label: "BROKEN CHAIR", lat: 46.2228, lon: 6.13885, kind: "chair" },
    { name: "Bains des Pâquis", short: "BAINS DES PÂQUIS", label: "BAINS DES PÂQUIS", lat: 46.2099336, lon: 6.1565303, kind: "baths" },
    { name: "Pont du Mont-Blanc", short: "MONT-BLANC BRIDGE", label: "PONT DU MONT-BLANC", lat: 46.2058842, lon: 6.1487233, kind: "bridge" },
    { name: "Jet d'Eau", short: "JET D'EAU", label: "JET D'EAU", lat: 46.20738, lon: 6.15589, kind: "fountain" },
    { name: "Jardin Anglais", short: "JARDIN ANGLAIS", label: "JARDIN ANGLAIS", lat: 46.2042967, lon: 6.1521733, kind: "garden" },
    { name: "Place Bel-Air", short: "BEL-AIR", label: "PLACE BEL-AIR", lat: 46.204254, lon: 6.1431002, kind: "square" },
    { name: "Old Town", short: "OLD TOWN", label: "VIEILLE-VILLE", lat: 46.2018975, lon: 6.1456151, kind: "oldtown" },
    { name: "Place de Neuve", short: "PLACE DE NEUVE", label: "PLACE DE NEUVE", lat: 46.2010578, lon: 6.1433758, kind: "square" },
    { name: "Parc des Bastions", short: "PARC DES BASTIONS", label: "PARC DES BASTIONS", lat: 46.1993939, lon: 6.1453019, kind: "park" }
  ];

  function project(lat, lon) {
    return { x: (lon - ORIGIN_LON) * LON_SCALE, y: (lat - ORIGIN_LAT) * METERS_PER_DEGREE };
  }
  places.forEach(function (place) {
    var p = project(place.lat, place.lon);
    place.x = p.x;
    place.y = p.y;
  });

  var roads = [
    { name: "AVENUE DE LA PAIX", major: true, pts: [[-770, 1730], [-690, 1530], [-629, 1424], [-588, 1270], [-520, 1080], [-438, 865], [-370, 650], [-350, 420], [-350, 150], [-350, 24]] },
    { name: "RUE DE LAUSANNE", major: true, pts: [[-870, 710], [-650, 650], [-430, 585], [-210, 520], [35, 490], [280, 452], [510, 415], [760, 360], [1040, 310]] },
    { name: "PLACE DE CORNAVIN", major: true, pts: [[-680, -155], [-540, -90], [-350, 5], [-215, 102], [-30, 140], [180, 130], [390, 115], [610, 90], [850, 35]] },
    { name: "RUE DU MONT-BLANC", major: true, pts: [[-350, 140], [-270, -5], [-205, -190], [-153, -340], [-180, -470], [-230, -580], [-298, -640], [-430, -735]] },
    { name: "QUAI DU MONT-BLANC", major: false, pts: [[-220, 510], [-180, 330], [-155, 170], [-120, -10], [-85, -165], [-35, -300], [55, -415], [128, -458]] },
    { name: "PONT DU MONT-BLANC", major: true, pts: [[-180, -440], [-36, -450], [128, -458], [294, -474], [448, -502], [570, -550]] },
    { name: "RUE DU RHÔNE", major: true, pts: [[-510, -525], [-395, -560], [-298, -640], [-140, -600], [20, -590], [190, -610], [365, -646], [520, -690]] },
    { name: "QUAI GUSTAVE-ADOR", major: false, pts: [[132, -458], [185, -515], [272, -586], [400, -635], [510, -565], [610, -438], [678, -292], [730, -80], [820, 125]] },
    { name: "RUE DE LA CONFÉDÉRATION", major: false, pts: [[-470, -680], [-365, -652], [-298, -640], [-183, -676], [-75, -727], [18, -798], [100, -850], [222, -866]] },
    { name: "RUE DU MARCHÉ", major: false, pts: [[-440, -748], [-325, -813], [-216, -874], [-105, -901], [15, -934], [150, -992], [270, -1023]] },
    { name: "RUE DE LA CROIX-ROUGE", major: false, pts: [[-495, -990], [-392, -1028], [-279, -995], [-204, -1082], [-130, -1181], [-12, -1240], [70, -1278]] },
    { name: "RUE DE CANDOLLE", major: false, pts: [[-570, -1100], [-445, -1108], [-325, -1120], [-190, -1150], [-130, -1181], [10, -1162], [158, -1150]] },
    { name: "RUE DES CHAÎNETTES", major: false, pts: [[-470, -865], [-395, -930], [-330, -1000], [-264, -1080], [-195, -1160], [-140, -1250]] },
    { name: "RUE DU STAND", major: false, pts: [[-708, -420], [-550, -453], [-390, -505], [-298, -640], [-245, -790], [-260, -930], [-279, -995]] },
    { name: "BOULEVARD GEORGES-FAVON", major: true, pts: [[-620, -1240], [-460, -1240], [-290, -1230], [-130, -1181], [30, -1135], [205, -1090], [365, -1050]] },
    { name: "RUE DU GÉNÉRAL-DUFOUR", major: false, pts: [[-445, -730], [-405, -865], [-365, -1010], [-340, -1175], [-355, -1320]] },
    { name: "RUE DE LA CITÉ", major: false, pts: [[-188, -625], [-117, -722], [-68, -818], [-105, -901], [-155, -998], [-130, -1181]] },
    { name: "RUE DES ÉTUVES", major: false, pts: [[-520, -820], [-390, -790], [-245, -785], [-92, -805], [75, -790], [220, -758]] },
    { name: "QUAI DES BERGUES", major: false, pts: [[-455, -220], [-325, -270], [-210, -330], [-90, -390], [35, -440], [128, -458]] },
    { name: "RUE DU RHÔNE", major: false, pts: [[-80, -430], [-75, -545], [-75, -650], [-105, -745], [-105, -901], [-60, -1010], [5, -1120]] },
    { name: "RUE DE L'HÔTEL-DE-VILLE", major: false, pts: [[-360, -720], [-270, -772], [-190, -830], [-105, -901], [4, -1007], [70, -1103]] },
    { name: "RUE DE LA TERRASSIÈRE", major: false, pts: [[230, -382], [325, -440], [417, -520], [400, -635], [340, -755], [275, -890]] },
    { name: "RUE DES ALPES", major: false, pts: [[-505, 160], [-470, -5], [-430, -180], [-385, -360], [-345, -480], [-298, -640]] },
    { name: "RUE DU MONT-DE-SION", major: false, pts: [[-515, -1050], [-403, -1120], [-279, -995], [-175, -930], [-50, -908], [105, -935]] },
    { name: "QUAI WILSON", major: false, pts: [[-410, 1010], [-365, 780], [-315, 570], [-270, 380], [-225, 220], [-190, 45]] },
    { name: "RUE DE BERNE", major: false, pts: [[-710, 320], [-545, 280], [-370, 237], [-220, 198], [-70, 178], [125, 170], [315, 149], [510, 115]] },
    { name: "RUE DU PRINCE", major: false, pts: [[-740, -10], [-585, 35], [-425, 75], [-260, 125], [-85, 155], [90, 110], [220, 45]] }
  ];

  var $ = function (selector) { return document.querySelector(selector); };
  var driveCanvas = $("#drive-map");
  var overviewCanvas = $("#overview-map");
  var driveCtx = driveCanvas.getContext("2d");
  var overviewCtx = overviewCanvas.getContext("2d");
  var stage = $(".drive-stage");
  var ui = {
    speed: $("#speed-value"), street: $("#street-state"), streetLed: $("#street-led"), area: $("#area-name"),
    compass: $("#compass-arrow"), compassLabel: $("#compass-label"), compassDistance: $("#compass-distance"),
    toast: $("#drive-toast"), toastCopy: $("#toast-copy"), toastKey: $("#toast-key"), toastIcon: $("#toast-icon"),
    pickupButton: $("#pickup-button"), pickupButtonLabel: $("#pickup-button-label"),
    passengerState: $("#passenger-state"), tripNumber: $("#trip-number"), pickupName: $("#pickup-name"), destinationName: $("#destination-name"),
    distance: $("#distance-value"), timer: $("#timer-value"), fare: $("#fare-value"), score: $("#score-value"), best: $("#best-score"),
    boost: $("#boost-value"), boostFill: $("#boost-fill"), manifest: $("#stop-list"), progress: $("#manifest-progress"),
    destinationMarker: $("#destination-marker"), passengerIcon: $("#passenger-icon"), toastPop: $("#toast-pop"), sound: $("#sound-toggle")
  };

  var player = { x: 0, y: 0, heading: 0.8, speed: 0 };
  var pickupIndex = 6;
  var targetIndex = 0;
  var phase = "pickup";
  var tripTime = 0;
  var fareDistance = 0;
  var timeoutPlayed = false;
  var elapsed = 0;
  var totalFare = 0;
  var score = 0;
  var completed = [];
  var boost = 100;
  var boostActive = false;
  var drifting = false;
  var driftPoints = 0;
  var tireMarks = [];
  var cam = { x: 0, y: 0 };
  var viewport = { w: 0, h: 0, dpr: 1 };
  var keys = Object.create(null);
  var toastTimeout = 0;
  var uiTick = 0;
  var soundContext = null;
  var soundOn = false;
  var bestScore = 0;
  try { bestScore = Number(localStorage.getItem("brickcab-best") || 0); } catch (error) { bestScore = 0; }
  if (!isFinite(bestScore)) bestScore = 0;
  ui.best.textContent = String(bestScore).padStart(5, "0");

  var landPolygon = [[-270, 240], [-245, 170], [-200, 100], [-150, 12], [-120, -60], [-83, -150], [-34, -245], [30, -342], [118, -405], [128, -458], [220, -525], [350, -574], [420, -585], [520, -535], [600, -470], [670, -350], [730, -180], [760, -5], [970, 54], [1200, 42], [1450, 80], [1750, 160], [2100, 2400], [-550, 2400]];
  var parks = [
    { name: "JARDIN ANGLAIS", pts: [[142, -495], [248, -475], [430, -507], [555, -580], [655, -653], [570, -778], [390, -835], [215, -802], [138, -690]], center: [395, -650], trees: 24 },
    { name: "PARC DES BASTIONS", pts: [[-408, -1115], [-300, -1048], [-121, -1057], [8, -1102], [116, -1187], [155, -1325], [14, -1370], [-170, -1342], [-355, -1285]], center: [-130, -1200], trees: 35 }
  ];

  function pointInPolygon(x, y, polygon) {
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      var xi = polygon[i][0], yi = polygon[i][1], xj = polygon[j][0], yj = polygon[j][1];
      var intersects = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / ((yj - yi) || 0.00001) + xi);
      if (intersects) inside = !inside;
    }
    return inside;
  }
  function isWater(x, y) { return pointInPolygon(x, y, landPolygon); }
  function inPark(x, y) {
    for (var i = 0; i < parks.length; i++) if (pointInPolygon(x, y, parks[i].pts)) return true;
    return (x > -390 && x < -215 && y > -725 && y < -550);
  }
  function distXY(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function haversine(lat1, lon1, lat2, lon2) {
    var rad = Math.PI / 180;
    var dLat = (lat2 - lat1) * rad;
    var dLon = (lon2 - lon1) * rad;
    var aa = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 6371008.8 * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  }
  function metersText(meters) {
    if (!isFinite(meters)) return "—";
    if (meters >= 1000) return (meters / 1000).toFixed(meters < 10000 ? 2 : 1) + " km";
    return Math.round(meters / 10) * 10 + " m";
  }
  function formatClock(seconds) {
    var safe = Math.max(0, Math.ceil(seconds));
    var mins = Math.floor(safe / 60);
    var secs = safe % 60;
    return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = stage.getBoundingClientRect();
    viewport.w = Math.max(1, rect.width);
    viewport.h = Math.max(1, rect.height);
    viewport.dpr = dpr;
    driveCanvas.width = Math.round(viewport.w * dpr);
    driveCanvas.height = Math.round(viewport.h * dpr);
    driveCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var miniRect = overviewCanvas.getBoundingClientRect();
    overviewCanvas.width = Math.max(1, Math.round(miniRect.width * dpr));
    overviewCanvas.height = Math.max(1, Math.round(miniRect.height * dpr));
    overviewCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawOverview();
  }
  window.addEventListener("resize", resize);

  function nearestRoadDistance(x, y) {
    var nearest = Infinity;
    for (var r = 0; r < roads.length; r++) {
      var pts = roads[r].pts;
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1];
        var vx = b[0] - a[0], vy = b[1] - a[1];
        var t = Math.max(0, Math.min(1, ((x - a[0]) * vx + (y - a[1]) * vy) / (vx * vx + vy * vy || 1)));
        var dx = x - (a[0] + vx * t), dy = y - (a[1] + vy * t);
        nearest = Math.min(nearest, Math.hypot(dx, dy));
      }
    }
    return nearest;
  }

  function seeded(ix, iy, salt) {
    var n = (Math.imul(ix | 0, 374761393) + Math.imul(iy | 0, 668265263) + Math.imul(salt | 0, 1442695041)) | 0;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  }
  function roundedRectPath(ctx, x, y, w, h, r) {
    var rad = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.lineTo(x + w - rad, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
    ctx.lineTo(x + w, y + h - rad);
    ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
    ctx.lineTo(x + rad, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
    ctx.lineTo(x, y + rad);
    ctx.quadraticCurveTo(x, y, x + rad, y);
    ctx.closePath();
  }
  function line(ctx, pts) {
    ctx.beginPath();
    for (var i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i][0], pts[i][1]); else ctx.lineTo(pts[i][0], pts[i][1]);
    }
  }
  function polygon(ctx, pts) {
    ctx.beginPath();
    for (var i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i][0], pts[i][1]); else ctx.lineTo(pts[i][0], pts[i][1]);
    }
    ctx.closePath();
  }

  function drawWater(ctx, bounds) {
    polygon(ctx, landPolygon);
    ctx.fillStyle = "#91c4c7";
    ctx.fill();
    ctx.lineJoin = "round";
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#82b7bb";
    ctx.stroke();
    ctx.save();
    polygon(ctx, landPolygon);
    ctx.clip();
    var left = Math.max(400, Math.floor((bounds.minX - 100) / 150) * 150);
    var right = Math.min(2000, bounds.maxX + 100);
    var bottom = Math.max(-600, bounds.minY - 100);
    var top = Math.min(2100, bounds.maxY + 100);
    ctx.strokeStyle = "rgba(244,251,240,.38)";
    ctx.lineWidth = 1.6;
    for (var y = Math.floor(bottom / 76) * 76; y < top; y += 76) {
      for (var x = left + (Math.floor(y / 76) % 2) * 38; x < right; x += 185) {
        var wave = [[x, y], [x + 17, y + 3], [x + 35, y + 1], [x + 52, y + 4]];
        line(ctx, wave);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawParkWorld(ctx, park) {
    polygon(ctx, park.pts);
    ctx.fillStyle = park.name === "JARDIN ANGLAIS" ? "#b7c99c" : "#a9c292";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(113,143,100,.28)";
    ctx.stroke();
    ctx.save();
    polygon(ctx, park.pts);
    ctx.clip();
    var cx = park.center[0], cy = park.center[1];
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(246,239,215,.85)";
    ctx.lineWidth = 10;
    if (park.name === "JARDIN ANGLAIS") {
      line(ctx, [[150, -750], [250, -705], [370, -687], [495, -706], [620, -765]]); ctx.stroke();
      line(ctx, [[210, -500], [292, -578], [380, -650], [488, -738]]); ctx.stroke();
      line(ctx, [[465, -500], [430, -578], [380, -650], [338, -792]]); ctx.stroke();
      ctx.fillStyle = "#e9d6a4";
      ctx.beginPath(); ctx.arc(420, -642, 27, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#d57756"; ctx.beginPath(); ctx.arc(420, -642, 11, 0, Math.PI * 2); ctx.fill();
    } else {
      line(ctx, [[-368, -1270], [-260, -1220], [-140, -1215], [-18, -1230], [90, -1280]]); ctx.stroke();
      line(ctx, [[-310, -1085], [-240, -1155], [-155, -1215], [-56, -1300]]); ctx.stroke();
      line(ctx, [[-45, -1085], [-84, -1155], [-155, -1215], [-221, -1310]]); ctx.stroke();
      ctx.fillStyle = "#e2d6b4";
      ctx.fillRect(-205, -1219, 104, 12);
      ctx.fillRect(-205, -1219, 12, 78);
      ctx.fillRect(-113, -1219, 12, 78);
    }
    for (var t = 0; t < park.trees; t++) {
      var rx = seeded(t + 21, Math.round(cx), park.name.length);
      var ry = seeded(t + 81, Math.round(cy), park.trees);
      var tx = cx + (rx - .5) * (park.name === "JARDIN ANGLAIS" ? 380 : 390);
      var ty = cy + (ry - .5) * (park.name === "JARDIN ANGLAIS" ? 205 : 220);
      if (!pointInPolygon(tx, ty, park.pts)) continue;
      ctx.fillStyle = "#78996f";
      ctx.beginPath(); ctx.arc(tx + 3, ty - 3, 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = t % 3 === 0 ? "#9cb985" : "#87a976";
      ctx.beginPath(); ctx.arc(tx, ty, 15, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(224,238,192,.48)";
      ctx.beginPath(); ctx.arc(tx - 4, ty - 5, 5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  function drawBuildings(ctx, bounds) {
    var cell = 150;
    var startX = Math.floor(bounds.minX / cell) - 1;
    var endX = Math.ceil(bounds.maxX / cell) + 1;
    var startY = Math.floor(bounds.minY / cell) - 1;
    var endY = Math.ceil(bounds.maxY / cell) + 1;
    var roofColors = ["#d4bba0", "#d9c5aa", "#c8c6a5", "#d7c8a9", "#c6bd9e", "#dbb9a4", "#c1c7ac"];
    for (var ix = startX; ix <= endX; ix++) {
      for (var iy = startY; iy <= endY; iy++) {
        var bx = ix * cell, by = iy * cell;
        var mx = bx + cell / 2, my = by + cell / 2;
        if (mx < -1360 || mx > 1320 || my < -1680 || my > 1660 || isWater(mx, my) || inPark(mx, my)) continue;
        if (mx > 900 && my > -340) continue;
        var urban = (mx > -540 && mx < 390 && my < -500 && my > -1110);
        var count = urban ? 5 : (seeded(ix, iy, 1) > .27 ? 3 : 2);
        var neighborhood = mx > -540 && mx < 250 && my < -610 && my > -1060;
        for (var b = 0; b < count; b++) {
          var rx = seeded(ix + 13 * b, iy - 9 * b, 2);
          var ry = seeded(ix - 17 * b, iy + 11 * b, 3);
          var w = (neighborhood ? 22 : 29) + rx * (neighborhood ? 24 : 33);
          var h = (neighborhood ? 24 : 27) + ry * (neighborhood ? 30 : 35);
          var x = bx + 13 + seeded(ix, b, 4) * (cell - w - 26);
          var y = by + 13 + seeded(iy, b, 5) * (cell - h - 26);
          if (isWater(x + w / 2, y + h / 2) || inPark(x + w / 2, y + h / 2)) continue;
          var color = roofColors[Math.floor(seeded(ix, iy, b + 20) * roofColors.length)];
          ctx.fillStyle = "rgba(77,81,63,.10)";
          roundedRectPath(ctx, x + 8, y + 8, w, h, 5); ctx.fill();
          ctx.fillStyle = "#cccab8";
          roundedRectPath(ctx, x - 3, y - 3, w + 7, h + 7, 5); ctx.fill();
          ctx.fillStyle = color;
          roundedRectPath(ctx, x, y, w, h, 4); ctx.fill();
          ctx.fillStyle = "rgba(255,249,225,.42)";
          roundedRectPath(ctx, x + 4, y + 4, Math.max(4, w * .39), 5, 2); ctx.fill();
          var studs = w > 38 ? 3 : 2;
          for (var s = 0; s < studs; s++) {
            var sx = x + 7 + s * ((w - 15) / Math.max(1, studs - 1));
            ctx.fillStyle = "rgba(248,239,211,.30)";
            ctx.beginPath(); ctx.arc(sx, y + h * .62, 2.3, 0, Math.PI * 2); ctx.fill();
          }
          if (seeded(ix, iy, b + 42) > .68) {
            ctx.fillStyle = "#8eaa86";
            ctx.fillRect(x + w - 7, y + h - 8, 5, 4);
          }
        }
      }
    }
  }

  function drawRoads(ctx, atOverview) {
    for (var r = 0; r < roads.length; r++) {
      var road = roads[r];
      var width = road.major ? 34 : 22;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      line(ctx, road.pts);
      ctx.strokeStyle = road.major ? "#c9c7b8" : "#d1cebf";
      ctx.lineWidth = width + 9;
      ctx.stroke();
      ctx.strokeStyle = road.major ? "#f6f0df" : "#f9f4e8";
      ctx.lineWidth = width;
      ctx.stroke();
      if (road.major) {
        ctx.strokeStyle = "rgba(255,255,255,.55)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([12, 16]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      if (!atOverview && road.major && road.name && r % 3 === 1) {
        var p = road.pts[Math.floor(road.pts.length / 2)];
        ctx.save();
        ctx.translate(p[0], p[1]);
        ctx.scale(1, -1);
        ctx.font = "500 " + (10 / mainZoom()) + "px 'DM Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "#9a9c8d";
        ctx.fillText(road.name, 0, 0);
        ctx.restore();
      }
    }
  }

  function mainZoom() {
    return Math.max(.44, Math.min(.68, viewport.h / 1200));
  }

  function drawRoundabout(ctx, x, y, r) {
    ctx.fillStyle = "#c9c7b8"; ctx.beginPath(); ctx.arc(x, y, r + 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#f8f2e4"; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#a8bf92"; ctx.beginPath(); ctx.arc(x, y, r * .53, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#d8dfbc"; ctx.beginPath(); ctx.arc(x - 2, y - 3, r * .24, 0, Math.PI * 2); ctx.fill();
  }

  function visibleBounds() {
    var z = mainZoom();
    return { minX: cam.x - viewport.w / (2 * z), maxX: cam.x + viewport.w / (2 * z), minY: cam.y - viewport.h / (2 * z), maxY: cam.y + viewport.h / (2 * z) };
  }
  function screenPoint(x, y) {
    var z = mainZoom();
    return { x: viewport.w / 2 + (x - cam.x) * z, y: viewport.h / 2 - (y - cam.y) * z };
  }

  function drawWorld() {
    var ctx = driveCtx;
    var w = viewport.w, h = viewport.h, z = mainZoom();
    ctx.setTransform(viewport.dpr, 0, 0, viewport.dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#d8e3d0";
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(z, -z);
    ctx.translate(-cam.x, -cam.y);
    var bounds = visibleBounds();
    ctx.fillStyle = "#e7e1ce";
    ctx.fillRect(bounds.minX - 100, bounds.minY - 100, bounds.maxX - bounds.minX + 200, bounds.maxY - bounds.minY + 200);
    drawWater(ctx, bounds);
    for (var p = 0; p < parks.length; p++) drawParkWorld(ctx, parks[p]);
    drawBuildings(ctx, bounds);
    drawRoads(ctx, false);
    drawRoundabout(ctx, -350, 20, 35);
    drawRoundabout(ctx, -300, -640, 30);
    drawRoundabout(ctx, -279, -995, 25);
    drawCityLabels(ctx, z);
    drawTireMarks(ctx);
    ctx.restore();
  }

  function drawCityLabels(ctx, zoom) {
    var labels = [
      ["PÂQUIS", -655, 325], ["GROTTES", -790, -242], ["SAINT-GERVAIS", -170, 65],
      ["CITÉ", -160, -800], ["EAUX-VIVES", 585, -963], ["PLAINPALAIS", -630, -1442],
      ["PLACE DES NATIONS", -570, 1648], ["LAC LÉMAN", 1130, 780], ["RHÔNE", 240, -218]
    ];
    ctx.save();
    ctx.fillStyle = "rgba(88,112,94,.56)";
    ctx.textAlign = "center";
    ctx.font = "600 " + (11 / zoom) + "px 'DM Mono', monospace";
    for (var i = 0; i < labels.length; i++) {
      ctx.save(); ctx.translate(labels[i][1], labels[i][2]); ctx.scale(1, -1); ctx.fillText(labels[i][0], 0, 0); ctx.restore();
    }
    ctx.restore();
  }

  function drawTireMarks(ctx) {
    for (var i = 0; i < tireMarks.length; i++) {
      var m = tireMarks[i];
      ctx.globalAlpha = Math.max(0, Math.min(.33, m.life / 4 * .33));
      ctx.strokeStyle = "#596252";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(m.x1, m.y1); ctx.lineTo(m.x2, m.y2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawLandmarkBadge(place, index) {
    var p = screenPoint(place.x, place.y);
    if (p.x < -90 || p.x > viewport.w + 90 || p.y < -70 || p.y > viewport.h + 70) return;
    var ctx = driveCtx;
    var isTarget = phase !== "complete" && targetIndex === index;
    var isDone = completed.indexOf(index) >= 0;
    var radius = isTarget ? 10 : 7;
    if (isTarget) {
      var pulse = 1 + Math.sin(elapsed * 3.2) * .11;
      ctx.beginPath(); ctx.arc(p.x, p.y, 17 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(222,101,76,.13)"; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 13 * pulse, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(219,95,73,.45)"; ctx.lineWidth = 1.5; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(p.x, p.y, radius + 3, 0, Math.PI * 2);
    ctx.fillStyle = isDone ? "#84a27f" : (isTarget ? "#dc654d" : "rgba(250,247,236,.97)"); ctx.fill();
    ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = isDone ? "#84a27f" : (isTarget ? "#dc654d" : "#fcfaf1"); ctx.fill();
    ctx.strokeStyle = isDone ? "#fcfaf1" : (isTarget ? "#fff5e8" : "#d76d52"); ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = isDone || isTarget ? "#fffaf0" : "#bf604c";
    ctx.font = "600 " + (isTarget ? 9 : 7) + "px 'DM Mono', monospace";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(isDone ? "✓" : String(index + 1), p.x, p.y + .4);
    if (isTarget || isDone || distXY({ x: player.x, y: player.y }, place) < 260) {
      var label = place.label;
      ctx.font = "600 8px 'DM Mono', monospace";
      var tw = ctx.measureText(label).width;
      var lx = p.x + 15;
      var ly = p.y - 19;
      if (lx + tw > viewport.w - 8) lx = p.x - tw - 19;
      roundedRectPath(ctx, lx - 5, ly - 9, tw + 10, 17, 3);
      ctx.fillStyle = "rgba(255,251,241,.93)"; ctx.fill();
      ctx.strokeStyle = "rgba(91,106,83,.14)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillStyle = "#526559";
      ctx.fillText(label, lx, ly);
    }
  }

  function drawPassenger() {
    if (phase !== "pickup") return;
    var site = places[pickupIndex];
    var p = screenPoint(site.x, site.y);
    if (p.x < -60 || p.x > viewport.w + 60 || p.y < -60 || p.y > viewport.h + 60) return;
    var ctx = driveCtx;
    var pulse = Math.sin(elapsed * 3.5) * 1.5;
    ctx.beginPath(); ctx.arc(p.x, p.y, 22 + pulse, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(243,192,73,.14)"; ctx.fill();
    ctx.setLineDash([3, 4]); ctx.strokeStyle = "rgba(197,140,40,.68)"; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(p.x, p.y, 17 + pulse, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    ctx.save(); ctx.translate(p.x, p.y);
    ctx.fillStyle = "rgba(47,58,48,.16)"; ctx.beginPath(); ctx.ellipse(2, 14, 8, 3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#d98259"; ctx.beginPath(); ctx.arc(0, -5, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#f1c94f"; roundedRectPath(ctx, -7, 1, 14, 13, 4); ctx.fill();
    ctx.fillStyle = "#648a80"; roundedRectPath(ctx, -6, 4, 12, 8, 3); ctx.fill();
    ctx.fillStyle = "#fff7df"; roundedRectPath(ctx, -4, 4, 8, 2, 1); ctx.fill();
    ctx.restore();
    var range = distXY({ x: player.x, y: player.y }, site);
    if (range < 185) {
      var tag = "PICK UP";
      ctx.font = "600 8px 'DM Mono', monospace";
      var w = ctx.measureText(tag).width + 12;
      roundedRectPath(ctx, p.x - w / 2, p.y + 23, w, 15, 3); ctx.fillStyle = "#fff8e7"; ctx.fill();
      ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#ac7040"; ctx.fillText(tag, p.x, p.y + 30.5);
    }
  }

  function drawTaxiAt(x, y, heading, playerCar, color) {
    var ctx = driveCtx;
    var p = playerCar ? screenPoint(x, y) : screenPoint(x, y);
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.PI / 2 - heading);
    if (playerCar) {
      if (Math.abs(player.speed) > 15) {
        ctx.fillStyle = "rgba(244,203,87,.14)";
        roundedRectPath(ctx, -22, 12, 44, 41, 10); ctx.fill();
      }
      ctx.fillStyle = "rgba(45,56,45,.24)"; roundedRectPath(ctx, -13, -18, 31, 48, 7); ctx.fill();
      ctx.fillStyle = "#343d38";
      roundedRectPath(ctx, -15, -19, 8, 16, 3); ctx.fill();
      roundedRectPath(ctx, 8, -19, 8, 16, 3); ctx.fill();
      roundedRectPath(ctx, -15, 8, 8, 15, 3); ctx.fill();
      roundedRectPath(ctx, 8, 8, 8, 15, 3); ctx.fill();
      ctx.fillStyle = "#f0c43f"; roundedRectPath(ctx, -13, -25, 26, 51, 7); ctx.fill();
      ctx.fillStyle = "#dfae2f"; roundedRectPath(ctx, -13, 14, 26, 12, 5); ctx.fill();
      ctx.fillStyle = "#f7d35b"; roundedRectPath(ctx, -10, -24, 20, 14, 4); ctx.fill();
      ctx.fillStyle = "#85aaa5"; roundedRectPath(ctx, -9, -16, 18, 10, 3); ctx.fill();
      ctx.fillStyle = "#d5e5d8"; roundedRectPath(ctx, -7, -14, 8, 4, 1.5); ctx.fill();
      ctx.fillStyle = "#85aaa5"; roundedRectPath(ctx, -9, 3, 18, 8, 3); ctx.fill();
      ctx.fillStyle = "#d5e5d8"; roundedRectPath(ctx, -7, 4, 8, 3, 1.5); ctx.fill();
      ctx.fillStyle = "#f8e092"; roundedRectPath(ctx, -3.5, -3, 7, 8, 2); ctx.fill();
      ctx.fillStyle = "#d85e48"; roundedRectPath(ctx, -9, -25, 5, 2, 1); ctx.fill(); roundedRectPath(ctx, 4, -25, 5, 2, 1); ctx.fill();
      ctx.fillStyle = "#fff4cc"; roundedRectPath(ctx, -8, 22, 5, 2, 1); ctx.fill(); roundedRectPath(ctx, 3, 22, 5, 2, 1); ctx.fill();
      ctx.fillStyle = "#f5d164"; roundedRectPath(ctx, -5, -7, 10, 5, 2); ctx.fill();
      ctx.fillStyle = "#624d1d"; ctx.font = "700 3.7px 'DM Mono', monospace"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("TAXI", 0, -4.5);
      ctx.fillStyle = "#e9bd3b"; roundedRectPath(ctx, -8, 11, 16, 3, 1); ctx.fill();
      for (var s = 0; s < 3; s++) {
        ctx.fillStyle = "#423e34"; ctx.beginPath(); ctx.arc(-5 + s * 5, 12.5, 1.1, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = "rgba(255,248,215,.68)";
      for (var st = 0; st < 3; st++) { ctx.beginPath(); ctx.arc(-6 + st * 6, -20, 1.2, 0, Math.PI * 2); ctx.fill(); }
    } else {
      ctx.fillStyle = "rgba(45,56,45,.18)"; roundedRectPath(ctx, -9, -13, 22, 32, 5); ctx.fill();
      ctx.fillStyle = "#313b36"; roundedRectPath(ctx, -10, -13, 5, 9, 2); ctx.fill(); roundedRectPath(ctx, 6, -13, 5, 9, 2); ctx.fill();
      roundedRectPath(ctx, -10, 6, 5, 9, 2); ctx.fill(); roundedRectPath(ctx, 6, 6, 5, 9, 2); ctx.fill();
      ctx.fillStyle = color || "#78958a"; roundedRectPath(ctx, -9, -17, 18, 34, 5); ctx.fill();
      ctx.fillStyle = "#d0e2d5"; roundedRectPath(ctx, -6, -12, 12, 7, 2); ctx.fill();
      ctx.fillStyle = "#d65e49"; roundedRectPath(ctx, -6, 14, 4, 2, 1); ctx.fill(); roundedRectPath(ctx, 2, 14, 4, 2, 1); ctx.fill();
    }
    ctx.restore();
  }

  var traffic = [];
  var trafficRoutes = [
    [[-680, -155], [-540, -90], [-350, 5], [-215, 102], [-30, 140], [180, 130], [390, 115], [610, 90]],
    [[-350, 140], [-270, -5], [-205, -190], [-153, -340], [-180, -470], [-230, -580], [-298, -640], [-430, -735], [-350, 140]],
    [[-510, -525], [-395, -560], [-298, -640], [-140, -600], [20, -590], [190, -610], [365, -646], [520, -690], [-510, -525]],
    [[-495, -990], [-392, -1028], [-279, -995], [-204, -1082], [-130, -1181], [-12, -1240], [70, -1278], [-495, -990]],
    [[-870, 710], [-650, 650], [-430, 585], [-210, 520], [35, 490], [280, 452], [510, 415], [760, 360], [-870, 710]]
  ];
  var trafficColors = ["#78968b", "#cd8264", "#8491a1", "#e2b748", "#8b9c70", "#8d80a3"];

  function pathLength(route) {
    var total = 0;
    for (var i = 0; i < route.length - 1; i++) total += Math.hypot(route[i + 1][0] - route[i][0], route[i + 1][1] - route[i][1]);
    return total;
  }
  function pathPosition(route, d) {
    var total = pathLength(route);
    var remain = d % total;
    for (var i = 0; i < route.length - 1; i++) {
      var a = route[i], b = route[i + 1];
      var len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (remain <= len) return { x: a[0] + (b[0] - a[0]) * (remain / len), y: a[1] + (b[1] - a[1]) * (remain / len), heading: Math.atan2(b[1] - a[1], b[0] - a[0]) };
      remain -= len;
    }
    return { x: route[0][0], y: route[0][1], heading: 0 };
  }
  for (var t = 0; t < 7; t++) {
    var routeIndex = t % trafficRoutes.length;
    var route = trafficRoutes[routeIndex];
    traffic.push({ route: route, offset: (pathLength(route) / 7) * (t + .25), speed: 5.2 + (t % 3) * 1.3, color: trafficColors[t % trafficColors.length] });
  }

  function updateTraffic(dt) {
    traffic.forEach(function (car) { car.offset += car.speed * dt; });
  }

  function drawOverview() {
    if (!overviewCanvas || !overviewCtx) return;
    var ctx = overviewCtx;
    var dpr = viewport.dpr || Math.min(window.devicePixelRatio || 1, 2);
    var rect = overviewCanvas.getBoundingClientRect();
    var w = rect.width, h = rect.height;
    if (!w || !h) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#e8e3d2"; ctx.fillRect(0, 0, w, h);
    var bounds = { minX: -970, maxX: 1090, minY: -1430, maxY: 1620 };
    var scale = Math.min((w - 20) / (bounds.maxX - bounds.minX), (h - 15) / (bounds.maxY - bounds.minY));
    var mapW = (bounds.maxX - bounds.minX) * scale;
    var mapH = (bounds.maxY - bounds.minY) * scale;
    var ox = (w - mapW) / 2 - bounds.minX * scale;
    var oy = (h - mapH) / 2 + bounds.maxY * scale;
    function mp(x, y) { return { x: ox + x * scale, y: oy - y * scale }; }
    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
    ctx.beginPath();
    for (var j = 0; j < landPolygon.length; j++) {
      var pp = mp(landPolygon[j][0], landPolygon[j][1]);
      if (j === 0) ctx.moveTo(pp.x, pp.y); else ctx.lineTo(pp.x, pp.y);
    }
    ctx.closePath(); ctx.fillStyle = "#8fc1c4"; ctx.fill();
    parks.forEach(function (park) {
      ctx.beginPath();
      park.pts.forEach(function (v, i) { var q = mp(v[0], v[1]); if (i === 0) ctx.moveTo(q.x, q.y); else ctx.lineTo(q.x, q.y); });
      ctx.closePath(); ctx.fillStyle = "#acc395"; ctx.fill();
    });
    roads.forEach(function (road) {
      ctx.beginPath();
      road.pts.forEach(function (v, i) { var q = mp(v[0], v[1]); if (i === 0) ctx.moveTo(q.x, q.y); else ctx.lineTo(q.x, q.y); });
      ctx.strokeStyle = road.major ? "rgba(251,247,234,.82)" : "rgba(250,247,238,.68)";
      ctx.lineWidth = road.major ? 2.2 : 1.1; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
    });
    for (var n = 0; n < places.length - 1; n++) {
      var a = mp(places[n].x, places[n].y), b = mp(places[n + 1].x, places[n + 1].y);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = "rgba(210,92,70,.48)"; ctx.lineWidth = 1.3; ctx.setLineDash([2, 3]); ctx.stroke(); ctx.setLineDash([]);
    }
    places.forEach(function (place, i) {
      var p = mp(place.x, place.y);
      var done = completed.indexOf(i) >= 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, 4.4, 0, Math.PI * 2);
      ctx.fillStyle = done ? "#8baa84" : (i === targetIndex && phase !== "complete" ? "#dc654d" : "#fff9e8"); ctx.fill();
      ctx.strokeStyle = done ? "#fff9e8" : "#c65d4a"; ctx.lineWidth = 1.1; ctx.stroke();
      ctx.font = "600 5.5px 'DM Mono', monospace"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = done || (i === targetIndex && phase !== "complete") ? "#fffaf0" : "#b95645";
      ctx.fillText(done ? "✓" : String(i + 1), p.x, p.y + .3);
    });
    if (phase === "pickup") {
      var pick = mp(places[pickupIndex].x, places[pickupIndex].y);
      ctx.beginPath(); ctx.arc(pick.x, pick.y, 5.5, 0, Math.PI * 2); ctx.strokeStyle = "#e2ae38"; ctx.lineWidth = 1.2; ctx.stroke();
    }
    var playerPoint = mp(player.x, player.y);
    ctx.beginPath(); ctx.arc(playerPoint.x, playerPoint.y, 5.1, 0, Math.PI * 2); ctx.fillStyle = "#edc348"; ctx.fill(); ctx.strokeStyle = "#fff8df"; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(playerPoint.x, playerPoint.y); ctx.lineTo(playerPoint.x + Math.cos(player.heading) * 7, playerPoint.y - Math.sin(player.heading) * 7); ctx.strokeStyle = "#4e6656"; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.restore();
  }

  function drawAll() {
    drawWorld();
    for (var i = 0; i < places.length; i++) drawLandmarkBadge(places[i], i);
    drawPassenger();
    traffic.forEach(function (car) {
      var p = pathPosition(car.route, car.offset);
      var sp = screenPoint(p.x, p.y);
      if (sp.x > -60 && sp.x < viewport.w + 60 && sp.y > -60 && sp.y < viewport.h + 60) drawTaxiAt(p.x, p.y, p.heading, false, car.color);
    });
    drawTaxiAt(player.x, player.y, player.heading, true);
    drawOverview();
  }

  function setStageToast(copy, icon, key, visible) {
    ui.toastCopy.textContent = copy;
    ui.toastIcon.textContent = icon || "✦";
    ui.toastKey.textContent = key || "";
    ui.toastKey.style.display = key ? "grid" : "none";
    ui.toast.classList.toggle("hidden", !visible);
  }
  function toast(copy) {
    ui.toastPop.textContent = copy;
    ui.toastPop.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () { ui.toastPop.classList.remove("show"); }, 2100);
  }

  function tripDistance() {
    if (targetIndex >= places.length) return 0;
    if (phase === "pickup") return haversine(places[pickupIndex].lat, places[pickupIndex].lon, places[targetIndex].lat, places[targetIndex].lon);
    return haversine(ORIGIN_LAT + player.y / METERS_PER_DEGREE, ORIGIN_LON + player.x / LON_SCALE, places[targetIndex].lat, places[targetIndex].lon);
  }
  function updateArea() {
    var nearest = null, distance = Infinity;
    places.forEach(function (place) {
      var d = distXY({ x: player.x, y: player.y }, place);
      if (d < distance) { distance = d; nearest = place; }
    });
    if (nearest && distance < 245) ui.area.textContent = nearest.kind === "oldtown" ? "VIEILLE-VILLE · GENÈVE" : nearest.label + " · GENÈVE";
    else if (player.x > 480 && player.y > -500) ui.area.textContent = "LAC LÉMAN · GENÈVE";
    else ui.area.textContent = "GENÈVE · CITY CENTER";
  }
  function updateUI() {
    var target = places[Math.min(targetIndex, places.length - 1)];
    var currentPickup = places[Math.min(pickupIndex, places.length - 1)];
    var distToPickup = distXY({ x: player.x, y: player.y }, currentPickup);
    var canPick = phase === "pickup" && distToPickup <= 135;
    var kmh = Math.round(Math.abs(player.speed) * 3.6);
    ui.speed.textContent = String(kmh);
    var bars = driveCanvas.parentElement.querySelectorAll(".speed-lines i");
    var filled = Math.min(bars.length, Math.ceil(kmh / 12));
    bars.forEach(function (bar, i) { bar.classList.toggle("on", i < filled); });
    var onRoad = nearestRoadDistance(player.x, player.y) < 48;
    ui.street.textContent = drifting ? "DRIFTING" : (onRoad ? (kmh < 3 ? "AT THE CURB" : "ON THE ROAD") : "OFF THE ROAD");
    ui.streetLed.classList.toggle("off", !onRoad);
    if (phase === "complete") {
      ui.pickupButton.disabled = false;
      ui.pickupButtonLabel.textContent = "DRIVE ANOTHER SHIFT";
      ui.passengerState.textContent = "SHIFT COMPLETE";
      ui.destinationName.textContent = "RUN CLEARED!";
      ui.destinationMarker.textContent = "✓";
      ui.distance.textContent = "10 STOPS";
      ui.timer.textContent = "—";
      ui.tripNumber.textContent = "10";
      setStageToast("Shift complete — Geneva is yours.", "★", "R", true);
    } else {
      ui.pickupButton.disabled = phase === "pickup" && !canPick;
      ui.pickupButtonLabel.textContent = phase === "pickup" ? (canPick ? "PICK UP PASSENGER" : "DRIVE TO PASSENGER") : "PASSENGER ON BOARD";
      ui.passengerState.textContent = phase === "pickup" ? "NEXT FARE" : "FARE IN PROGRESS";
      ui.pickupName.textContent = currentPickup.label;
      ui.destinationName.textContent = target.label;
      ui.destinationMarker.textContent = String(targetIndex + 1);
      ui.tripNumber.textContent = String(targetIndex + 1).padStart(2, "0");
      ui.distance.textContent = metersText(tripDistance());
      ui.timer.textContent = phase === "pickup" ? "—" : formatClock(tripTime);
      if (phase === "pickup") {
        setStageToast(canPick ? "Passenger is ready. Hop in and take the fare." : "Your passenger is waiting at " + currentPickup.short + ".", "✦", "E", true);
      } else {
        setStageToast(tripTime > 0 ? "Race to " + target.short + " — keep the meter moving!" : "Time's up — finish the fare for your cash.", tripTime > 0 ? "↗" : "!", "", true);
      }
    }
    ui.fare.textContent = totalFare.toFixed(2);
    ui.score.textContent = String(Math.max(0, Math.floor(score))).padStart(5, "0");
    ui.boost.textContent = Math.round(boost) + "%";
    ui.boostFill.style.width = Math.max(0, boost) + "%";
    ui.progress.textContent = completed.length + " / 10 CLEARED";
    ui.manifest.innerHTML = "";
    places.forEach(function (place, i) {
      var row = document.createElement("div");
      row.className = "stop-row" + (completed.indexOf(i) >= 0 ? " done" : "") + (targetIndex === i && phase !== "complete" ? " current" : "");
      var number = document.createElement("span"); number.className = "stop-number"; number.textContent = completed.indexOf(i) >= 0 ? "✓" : String(i + 1);
      var name = document.createElement("span"); name.className = "stop-name"; name.textContent = place.short;
      row.appendChild(number); row.appendChild(name); ui.manifest.appendChild(row);
    });
    updateArea();
    if (phase === "complete") {
      ui.compassLabel.textContent = "SHIFT CLEARED"; ui.compassDistance.textContent = "NICE DRIVING";
    } else {
      var goal = phase === "pickup" ? currentPickup : target;
      ui.compassLabel.textContent = goal.short;
      ui.compassDistance.textContent = phase === "pickup" ? metersText(distToPickup) : metersText(tripDistance());
      var dx = goal.x - player.x, dy = goal.y - player.y;
      var bearing = Math.atan2(dx, dy) * 180 / Math.PI;
      ui.compass.style.transform = "rotate(" + bearing + "deg)";
    }
  }

  function sound(type) {
    if (!soundOn || !soundContext) return;
    var now = soundContext.currentTime;
    var osc = soundContext.createOscillator();
    var gain = soundContext.createGain();
    osc.connect(gain); gain.connect(soundContext.destination);
    osc.type = type === "pickup" ? "triangle" : "square";
    var base = type === "pickup" ? 660 : (type === "drop" ? 880 : 380);
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.exponentialRampToValueAtTime(base * (type === "timeout" ? .55 : 1.35), now + .13);
    gain.gain.setValueAtTime(.045, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + .16);
    osc.start(now); osc.stop(now + .17);
  }

  function beginFare() {
    if (phase === "complete") { resetRun(); return; }
    if (phase !== "pickup") return;
    var pickup = places[pickupIndex];
    var distance = distXY({ x: player.x, y: player.y }, pickup);
    if (distance > 135) {
      toast("Passenger is " + metersText(distance) + " away. Follow the amber marker.");
      return;
    }
    var routeDistance = haversine(pickup.lat, pickup.lon, places[targetIndex].lat, places[targetIndex].lon);
    fareDistance = routeDistance;
    tripTime = Math.max(46, Math.round(36 + (routeDistance / 1000) * 88));
    timeoutPlayed = false;
    phase = "drive";
    toast("Fare on board · " + places[targetIndex].short + " is calling!");
    sound("pickup");
    updateUI();
  }

  function deliverFare() {
    if (phase !== "drive") return;
    var target = places[targetIndex];
    var timeBonus = Math.max(0, Math.round(tripTime)) * 8;
    var earned = 7 + fareDistance / 1000 * 3.6;
    var points = 420 + fareDistance * .27 + timeBonus + Math.min(240, driftPoints);
    totalFare += earned;
    score += points;
    completed.push(targetIndex);
    if (score > bestScore) {
      bestScore = Math.floor(score);
      try { localStorage.setItem("brickcab-best", String(bestScore)); } catch (error) { /* The current shift score still works without storage. */ }
      ui.best.textContent = String(bestScore).padStart(5, "0");
    }
    boost = Math.min(100, boost + 33);
    sound("drop");
    var deliveredName = target.short;
    targetIndex++;
    pickupIndex = Math.min(targetIndex - 1, places.length - 1);
    tripTime = 0;
    driftPoints = 0;
    if (targetIndex >= places.length) {
      phase = "complete";
      player.speed *= .45;
      toast("10 fares delivered · Geneva cab legend!");
      setStageToast("Shift complete — Geneva is yours.", "★", "R", true);
    } else {
      phase = "pickup";
      toast("Fare delivered at " + deliveredName + " · next passenger is waiting.");
      setStageToast("Passenger ready at " + places[pickupIndex].short + ".", "✦", "E", true);
    }
    updateUI();
  }

  function resetRun() {
    completed = [];
    targetIndex = 0;
    pickupIndex = 6;
    phase = "pickup";
    totalFare = 0;
    score = 0;
    boost = 100;
    tripTime = 0;
    fareDistance = 0;
    timeoutPlayed = false;
    driftPoints = 0;
    tireMarks = [];
    var start = places[pickupIndex];
    player.x = start.x - 23;
    player.y = start.y - 28;
    player.heading = .68;
    player.speed = 0;
    cam.x = player.x; cam.y = player.y;
    toast("New shift started. First stop: Gare Cornavin.");
    updateUI();
  }

  function setKey(code, pressed) { keys[code] = pressed; }
  window.addEventListener("keydown", function (event) {
    var code = event.code;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].indexOf(code) >= 0) event.preventDefault();
    if (code === "KeyW" || code === "ArrowUp") setKey("up", true);
    if (code === "KeyS" || code === "ArrowDown") setKey("down", true);
    if (code === "KeyA" || code === "ArrowLeft") setKey("left", true);
    if (code === "KeyD" || code === "ArrowRight") setKey("right", true);
    if (code === "ShiftLeft" || code === "ShiftRight") setKey("boost", true);
    if (code === "Space") setKey("drift", true);
    if ((code === "KeyE" || code === "Enter") && !event.repeat) beginFare();
    if (code === "KeyR" && !event.repeat) resetRun();
  });
  window.addEventListener("keyup", function (event) {
    var code = event.code;
    if (code === "KeyW" || code === "ArrowUp") setKey("up", false);
    if (code === "KeyS" || code === "ArrowDown") setKey("down", false);
    if (code === "KeyA" || code === "ArrowLeft") setKey("left", false);
    if (code === "KeyD" || code === "ArrowRight") setKey("right", false);
    if (code === "ShiftLeft" || code === "ShiftRight") setKey("boost", false);
    if (code === "Space") setKey("drift", false);
  });
  window.addEventListener("blur", function () { keys = Object.create(null); });

  document.querySelectorAll(".touch-key").forEach(function (button) {
    var key = button.getAttribute("data-key");
    function down(event) { event.preventDefault(); button.classList.add("active"); setKey(key, true); if (button.setPointerCapture) button.setPointerCapture(event.pointerId); }
    function up(event) { event.preventDefault(); button.classList.remove("active"); setKey(key, false); }
    button.addEventListener("pointerdown", down);
    button.addEventListener("pointerup", up);
    button.addEventListener("pointercancel", up);
    button.addEventListener("lostpointercapture", up);
  });
  ui.pickupButton.addEventListener("click", beginFare);
  $("#map-reset").addEventListener("click", function () { cam.x = player.x; cam.y = player.y; });
  ui.sound.addEventListener("click", function () {
    soundOn = !soundOn;
    ui.sound.classList.toggle("sound-on", soundOn);
    if (soundOn && !soundContext) {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) soundContext = new AudioCtx();
    }
    if (soundContext && soundContext.state === "suspended") soundContext.resume();
    ui.sound.textContent = soundOn ? "♫" : "♪";
    toast(soundOn ? "Arcade sound on" : "Arcade sound off");
    if (soundOn) sound("pickup");
  });

  function tick(dt) {
    elapsed += dt;
    updateTraffic(dt);
    var turn = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    var throttle = (keys.up ? 1 : 0) - (keys.down ? 1 : 0);
    var onRoad = nearestRoadDistance(player.x, player.y) < 48;
    boostActive = keys.boost && boost > 0 && throttle > 0;
    var maxSpeed = boostActive ? 47 : (onRoad ? 34 : 21);
    var accel = throttle > 0 ? 10.8 : (throttle < 0 ? 8.4 : 0);
    if (boostActive) { accel *= 1.72; boost = Math.max(0, boost - dt * 24); }
    else boost = Math.min(100, boost + dt * 3.6);
    if (keys.drift && Math.abs(player.speed) > 5 && turn !== 0) {
      drifting = true;
      var tireAngle = player.heading + (turn > 0 ? -1 : 1) * Math.PI / 2;
      var backX = player.x - Math.cos(player.heading) * 20;
      var backY = player.y - Math.sin(player.heading) * 20;
      tireMarks.push({ x1: backX + Math.cos(tireAngle) * 7, y1: backY + Math.sin(tireAngle) * 7, x2: backX - Math.cos(tireAngle) * 7, y2: backY - Math.sin(tireAngle) * 7, life: 4.2 });
      driftPoints += dt * Math.abs(player.speed) * .9;
      score += dt * 12;
    } else drifting = false;
    if (throttle) player.speed += throttle * accel * dt;
    else player.speed *= Math.exp(-(keys.drift ? 1.35 : 1.0) * dt);
    if (keys.drift) player.speed *= Math.exp(-1.4 * dt);
    if (!onRoad) player.speed *= Math.exp(-.14 * dt);
    player.speed = Math.max(-12, Math.min(maxSpeed, player.speed));
    if (Math.abs(player.speed) < .08) player.speed = 0;
    if (turn && Math.abs(player.speed) > .1) {
      var steerFactor = .34 + .66 * Math.min(1, Math.abs(player.speed) / 10);
      var driftFactor = keys.drift && Math.abs(player.speed) > 8 ? 1.55 : 1;
      player.heading += turn * 1.78 * steerFactor * driftFactor * dt * (player.speed >= 0 ? 1 : -1);
    }
    player.x += Math.cos(player.heading) * player.speed * dt;
    player.y += Math.sin(player.heading) * player.speed * dt;
    if (phase === "drive") {
      var previousTime = tripTime;
      tripTime = Math.max(0, tripTime - dt);
      if (previousTime > 0 && tripTime <= 0 && !timeoutPlayed) { sound("timeout"); timeoutPlayed = true; }
      var target = places[targetIndex];
      if (distXY({ x: player.x, y: player.y }, target) <= 68) deliverFare();
    }
    tireMarks.forEach(function (mark) { mark.life -= dt; });
    tireMarks = tireMarks.filter(function (mark) { return mark.life > 0; });
    if (tireMarks.length > 160) tireMarks.splice(0, tireMarks.length - 160);
    cam.x += (player.x - cam.x) * Math.min(1, dt * 4.7);
    cam.y += (player.y - cam.y) * Math.min(1, dt * 4.7);
    if (uiTick <= 0) { updateUI(); uiTick = .12; }
    uiTick -= dt;
  }

  var lastFrame = 0;
  function frame(time) {
    if (!lastFrame) lastFrame = time;
    var dt = Math.min(.05, (time - lastFrame) / 1000);
    lastFrame = time;
    tick(dt);
    drawAll();
    window.requestAnimationFrame(frame);
  }

  function init() {
    var start = places[pickupIndex];
    player.x = start.x - 23;
    player.y = start.y - 28;
    player.heading = .68;
    cam.x = player.x; cam.y = player.y;
    resize();
    updateUI();
    window.requestAnimationFrame(frame);
  }
  init();
}());
