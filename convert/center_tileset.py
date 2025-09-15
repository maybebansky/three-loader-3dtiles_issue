#!/usr/bin/env python3
# center_tileset.py  <path/to/output/tileset.json>
import sys, json, pathlib

tileset_path = pathlib.Path(sys.argv[1]).resolve()
with tileset_path.open() as f:
    ts = json.load(f)

root = ts["root"]
bv   = root["boundingVolume"]

if "box" in bv:
    cx, cy, cz = bv["box"][:3]
elif "sphere" in bv:             # [cx, cy, cz, radius]
    cx, cy, cz = bv["sphere"][:3]
else:
    raise SystemExit("Unsupported boundingVolume type")

root["transform"] = [
    1,0,0,-cx,
    0,1,0,-cy,
    0,0,1,-cz,
    0,0,0, 1
]

with tileset_path.open("w") as f:
    json.dump(ts, f, separators=(",",":"))

print(f"Centred tileset by ({-cx}, {-cy}, {-cz})")