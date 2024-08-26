FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=SPOTIFY_CLIENT_ID \
  --mount=type=secret,id=SPOTIFY_CLIENT_SECRET \
  --mount=type=secret,id=GH_TOKEN \
  export SPOTIFY_CLIENT_ID=$(cat /run/secrets/SPOTIFY_CLIENT_ID) &&\
  export SPOTIFY_CLIENT_SECRET=$(cat /run/secrets/SPOTIFY_CLIENT_ID) &&\
  export GH_TOKEN=$(cat /run/secrets/SPOTIFY_CLIENT_ID)

RUN corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

LABEL org.opencontainers.image.source https://github.com/ParzivalEugene/Links