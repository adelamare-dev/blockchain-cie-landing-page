#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

VERSION="$(grep -m1 '"version"' package.json | cut -d'"' -f4)"
IMAGE="${IMAGE:-blockchain-cie-landing-page:${VERSION}}"
PLATFORM="${PLATFORM:-linux/amd64}"
COMPOSE_FILE="docker-compose.yml"

echo "Building ${IMAGE} for ${PLATFORM}..."
echo -n "Ready ? "
read youChoice

docker build \
  --platform "${PLATFORM}" \
  -t "${IMAGE}" \
  .

ARCH="$(docker inspect "${IMAGE}" --format '{{.Architecture}}')"


cat > "$COMPOSE_FILE" <<EOF
services:
  frontend:
    image: ${IMAGE}
    ports:
      - 127.0.0.2:3010:80
EOF

echo "Done. ${IMAGE} (${ARCH}) -- deploy with: celestical deploy $COMPOSE_FILE"
