#!/bin/bash

# Activate the virtual environment
source .venv/bin/activate

rm -rf output

py3dtiles convert raw/merged_scan_2_2_84160092.las --out output

# Move JSON files outside of /points when moving to web server
./move-json-up.sh output

python center_tileset.py output/tileset.json 
