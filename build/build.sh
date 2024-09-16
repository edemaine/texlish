#!/bin/bash
set -euo pipefail

# clean build
rm -rf dist
mkdir dist

# normal files
civet --no-config build/esbuild.civet "$@"

# cli
BIN="dist/texlish"
echo "#!/usr/bin/env node" | cat - dist/cli.js > "$BIN"
echo "cli()" >> "$BIN"
chmod +x "$BIN"
rm dist/cli.js
