#!/usr/bin/env bash
set -euo pipefail

# Move all *.json files from the points directory up one level.
# Usage:
#   ./move-json-up.sh [BASE_OUTPUT_DIR]
# If BASE_OUTPUT_DIR is omitted, defaults to <this_script_dir>/output

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
base_output_dir=${1:-"$script_dir/output"}
points_dir="$base_output_dir/points"

if [ ! -d "$points_dir" ]; then
  echo "Points directory not found: $points_dir" >&2
  exit 1
fi

shopt -s nullglob
json_files=("$points_dir"/*.json)

if [ ${#json_files[@]} -eq 0 ]; then
  echo "No JSON files found in $points_dir"
  exit 0
fi

echo "Moving ${#json_files[@]} JSON file(s) from $points_dir to $base_output_dir"

# -n: do not overwrite existing files
mv -n "${json_files[@]}" "$base_output_dir/"

echo "Done."


