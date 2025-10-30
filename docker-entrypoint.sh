#!/bin/sh
set -eu

echo "Generating runtime config..."
./generate_config_js.sh > /app/public/js/init.js

echo "Starting Next.js..."
exec npm start