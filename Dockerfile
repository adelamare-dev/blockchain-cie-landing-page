# FROM node:22-alpine AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
# RUN corepack enable pnpm && pnpm i

# FROM node:22-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# RUN corepack enable pnpm && pnpm run build

FROM nginx:1.30-alpine

COPY docker.nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://localhost:80/ || exit 1
