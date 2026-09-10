# syntax=docker/dockerfile:1
# Static build served by nginx -- this frontend calls the backend over
# HTTP at runtime (see src/lib/api.js / VITE_API_URL), it doesn't need
# Node in the final image at all.
FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# VITE_API_URL / VITE_CLIENT_APP_URL etc. are baked in at build time
# (Vite inlines import.meta.env.* into the bundle) -- pass them as
# --build-arg at image build time, they cannot be changed at container
# start like a normal runtime env var.
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
    CMD wget -q --spider http://localhost/ || exit 1
