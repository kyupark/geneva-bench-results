"""Download the public OSM geometry used by the Geneva miniature."""
import json
import requests
from pathlib import Path

root = Path(__file__).resolve().parents[1]
bbox = "46.188,6.119,46.237,6.183"
query = f'''[out:json][timeout:150];(
  way["building"]({bbox});
  way["highway"]({bbox});
  way["railway"="rail"]({bbox});
  way["natural"="water"]({bbox});
  relation["natural"="water"]({bbox});
  way["waterway"="riverbank"]({bbox});
  way["leisure"="park"]({bbox});
  way["landuse"="grass"]({bbox});
  way["landuse"="forest"]({bbox});
  way["natural"="wood"]({bbox});
  way["landuse"="recreation_ground"]({bbox});
  node["natural"="tree"]({bbox});
);out geom;'''
for endpoint in ["https://overpass.osm.ch/api/interpreter", "https://overpass-api.de/api/interpreter", "https://overpass.private.coffee/api/interpreter"]:
    try:
        print("Fetching", endpoint, flush=True)
        r = requests.get(endpoint, params={"data": query}, timeout=180)
        r.raise_for_status()
        data = r.json()
        if not data.get("elements"):
            raise ValueError("Empty data")
        (root / "data/osm.json").write_text(json.dumps(data))
        print("Saved", len(data["elements"]), "elements", len(r.content), "bytes", flush=True)
        break
    except Exception as exc:
        print(type(exc).__name__, str(exc)[:180], flush=True)
else:
    raise SystemExit("No map server responded")
