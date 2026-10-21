# CRAZY TAXI — GENÈVE

A small, playable LEGO-style Crazy Taxi set in Geneva. Throw a tiny yellow brick taxi around a
hand-built city, collect fares at ten real landmarks, and race them to their destination before
the shift clock hits zero.

![stack](https://img.shields.io/badge/three.js-r160-102436) ![stack](https://img.shields.io/badge/no%20build%20step-ffd21f)

## Play

```bash
npm start
# open http://localhost:4173
```

No install step and no external network requests are needed: Three.js, the fonts and all textures
are included in the repository. `npm start` simply serves the folder with a tiny Node HTTP server.

## Controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Accelerate | `W` / `↑` | **GO** |
| Brake / reverse | `S` / `↓` | **STOP** |
| Steer | `A` `D` / `←` `→` | left / right arrows |
| Handbrake drift | `Space` | **DRIFT** |
| Brick boost | `Shift` | **BOOST** |
| Horn | `H` | — |
| Pause | `P` / `Esc` | pause button |
| Recover to last dry road | `R` | — |
| Camera near / far | `C` | — |
| Mute | `M` | pause menu |

Stop inside the glowing ring to pick up a fare. Stop inside the destination ring to drop them off.
Drifting and collecting golden studs charges the boost meter. Driving off a quay into the lake costs
three seconds and returns you to the last dry road.

## The ten destinations

Every destination sits at its real OpenStreetMap coordinate. The map uses an equirectangular
projection around `46.206°N, 6.148°E` with **1 world unit = 10 metres**, so bearings and relative
distances between landmarks are preserved (roads are stylised for arcade driving).

| Landmark | Latitude | Longitude |
| --- | ---: | ---: |
| Gare Cornavin | 46.209277 | 6.142375 |
| Broken Chair | 46.222804 | 6.138849 |
| Bains des Pâquis | 46.209934 | 6.156530 |
| Pont du Mont-Blanc | 46.205884 | 6.148723 |
| Jet d’Eau | 46.207381 | 6.155889 |
| Jardin Anglais | 46.204297 | 6.152173 |
| Place Bel-Air | 46.204326 | 6.143175 |
| Old Town | 46.201898 | 6.145615 |
| Place de Neuve | 46.201058 | 6.143376 |
| Parc des Bastions | 46.199394 | 6.145302 |

Fares are assigned to every not-yet-stamped destination before repeats, so a long shift naturally
tours all ten. Completing all ten adds a CHF 250 collector bonus and 25 seconds.

## What's inside

- A single deterministic, hand-authored 3D city: station, lake, Rhône, bridge, old town, parks,
  quays, waterfront promenades, moving traffic, boats, flags, fountains, flower clock, Reformation Wall,
  Jet d’Eau and a very large broken chair.
- Arcade vehicle physics with grip/drift, boost, jumps, collision recovery and water penalties.
- Passenger pickup/drop-off loop with per-fare distances, tips, combos, time extensions and ranks.
- A dynamic minimap using the same real-world coordinate data.
- Synth audio (engine, tyres, horn, pickups, cash, crashes) built with the Web Audio API; no audio files.
- Responsive HUD and touch controls. Desktop is the primary experience; portrait and landscape phones
  are supported.
- Static-geometry batching + instancing to keep the brick city light on draw calls.

## Notes

This is a fan-made, non-commercial project. It is not affiliated with SEGA, the Crazy Taxi
franchise, or the LEGO Group. Landmark coordinates were geocoded from OpenStreetMap (© OpenStreetMap contributors, ODbL);
buildings and roads are playful approximations rather than survey data.

Three.js is MIT licensed. Lilita One and Nunito Sans are distributed under the SIL Open Font License.
