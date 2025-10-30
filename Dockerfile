# Stage 1: Build
FROM node:18.18.2-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install

COPY . .

RUN npm run build

# Stage 2: Production Runner
FROM node:18.18.2-slim AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY docker-entrypoint.sh ./
COPY generate_config_js.sh ./
RUN chmod +x docker-entrypoint.sh generate_config_js.sh

EXPOSE 3000
ENTRYPOINT ["/app/docker-entrypoint.sh"]
