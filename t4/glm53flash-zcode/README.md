# 🚕 Brick Taxi Genève

A LEGO-style Crazy Taxi fan game set in Geneva. Drive a brick-built yellow taxi,
pick up blocky citizens, and race them to ten real Geneva landmarks — all laid out
at their **true relative positions and distances**, converted from real GPS
coordinates.

![landmarks](https://img.shields.io/badge/landmarks-10-f6c700) ![engine](https://img.shields.io/badge/Three.js-r160-d21012)

## Run it

- **Online:** just double-click `index.html` (loads three.js from the jsDelivr CDN).
- **Offline:** serve the folder so the vendored library is found:

  ```bash
  cd geneva-brick-taxi
  python3 -m http.server 8123
  # open http://localhost:8123
  ```

## How to play

| Key | Action |
|---|---|
| `W` / `↑` | accelerate |
| `S` / `↓` | brake / reverse |
| `A` `D` / `←` `→` | steer |
| `SPACE` | handbrake drift |
| `H` | horn (startles pedestrians) |
| `M` | toggle chiptune music |
| `P` | pause |
| `R` | restart after time runs out |

Pick up the passenger under the **green** beacon, then follow the big green arrow
to the **amber** `$` beacon at their destination. Every delivery pays CHF and adds
time; fast deliveries earn an **S / A / B / C** rating and a bigger multiplier.
Don't drive into the Rhône or the lake — you'll be fished out and lose the time.

Touch controls appear automatically on coarse-pointer devices.

## The ten landmarks (real GPS → game coordinates)

Gare Cornavin · Broken Chair (Place des Nations, with UN flag alley) · Bains des Pâquis
(drivable pier) · Pont du Mont-Blanc (drivable bridge) · Jet d'Eau (in the lake,
at its real bearing ~500 m offshore) · Jardin Anglais (flower clock) ·
Place Bel-Air · Old Town (St-Pierre cathedral on the hill) · Place de Neuve
(Grand Théâtre) · Parc des Bastions (Reformation Wall + giant chess).

The map transform is `x = (lon − 6.1495)·42398`, `z = (46.2095 − lat)·60816`
game units — arcade-compressed to ≈55 % real scale (1 unit ≈ 0.55 m) so a
cross-town fare takes 30–60 s, with **proportions between landmarks kept exact**.
The Rhône, the lake shoreline, the hill of the Old Town, and the quay roads all
follow the real geometry.

## Tech

Single self-contained `index.html` (~1300 lines): Three.js (r160, vendored in
`lib/` for offline use), procedural canvas textures (studs, windows, faces, signs),
instanced buildings/trees, arcade car physics with drift, circle colliders,
WebAudio-synthesized engine / sfx / chiptune loop, canvas minimap prerendered
from the same map data. No build step, no assets.

Fan-made tribute — not affiliated with the LEGO Group or SEGA.
