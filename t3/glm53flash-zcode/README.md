# GENÈVE ROYALE

A PUBG-style battle royale set in central Geneva — top-down, browser-based, zero dependencies.

**40 combatants drop in. One walks away.**

![genres](https://img.shields.io/badge/mode-battle_royale-red)

## Run it

```bash
cd geneva-royale
python3 -m http.server 8123
# open http://localhost:8123
```

(No build step, no assets, no libraries. Any static file server works. Opening `index.html`
directly also works in most browsers.)

## The map

A hand-crafted 4400×4400 top-down map of Geneva's centre:

- **Vieille Ville** — dense terracotta rooftops on the hill, Cathédrale St-Pierre,
  Hôtel de Ville, Place du Bourg-de-Four, Promenade de la Treille, ramparts
- **The lakefront** — Lac Léman, the **Jet d'Eau** (animated), Quai du Mont-Blanc,
  Bains des Pâquis pier, Jardin Anglais with the Horloge Fleurie
- **Place de Neuve** — Grand Théâtre, Conservatoire
- **Parc des Bastions** — Promenade des Bastions, tree rows, the giant chessboard,
  Uni Bastions, the Mur des Réformateurs
- Plus: the Rhône with three bridges and Île Rousseau, Gare Cornavin and its rail
  yards, Palais des Nations, Eaux-Vives, Champel, Plainpalais, Jonction and Carouge
  across the Arve

Water is impassable except at bridges and the Pâquis pier. Buildings, ramparts,
trees and crates block movement and bullets; the Old Town's alleys make for
close-quarters ambushes.

## The match

1. **Deploy** — pick your drop zone on the map, glide down (steer with WASD)
2. **Loot** — 5 weapons (P92, MP5, M1014 shotgun, SG 550, ZfK 55 sniper), 4 ammo
   types, vests & helmets (lvl I–III), bandages, first aid kits, med kits, energy drinks
3. **Survive** — the blue zone shrinks in 7 phases with escalating damage
4. **Win** — last one standing gets the *Winner Winner Fondue Dinner*

39 AI combatants loot, rotate with the zone, hunt sounds, strafe-fight and heal.

## Controls

| Key | Action |
|---|---|
| WASD / arrows | move (Shift = sprint) |
| Mouse | aim, hold to fire autos |
| E | pick up |
| R | reload |
| 1 / 2 / 3 | primary / secondary / fists (wheel cycles) |
| 4 / 5 / F | bandage+first aid / med kit / energy drink |
| M / Tab | map (the match keeps running!) |
| V | sound on/off |
| Esc | pause |

## Dev notes

- `?fast=1` — 6× zone speed for quick matches
- Console hooks: `G` (game state), `G_debug.win()`, `G_debug.ff(seconds)`,
  `G_debug.give('sg550')`
- All sounds are synthesized with WebAudio; all rendering is Canvas 2D
