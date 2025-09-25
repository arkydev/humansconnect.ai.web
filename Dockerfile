FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prefer-offline

COPY . .

ENV NODE_ENV=production
RUN pnpm build

FROM nginx:alpine-slim

COPY --from=builder /app/dist /usr/share/nginx/html 2>/dev/null || \
     COPY --from=builder /app/build /usr/share/nginx/html 2>/dev/null || \
     COPY --from=builder /app/out /usr/share/nginx/html 2>/dev/null || \
     echo "Build output not found in dist/, build/, or out/"

RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    sendfile on; \
    tcp_nopush on; \
    tcp_nodelay on; \
    keepalive_timeout 65; \
    types_hash_max_size 2048; \
    server_tokens off; \
    \
    gzip on; \
    gzip_vary on; \
    gzip_comp_level 6; \
    gzip_min_length 256; \
    gzip_proxied any; \
    gzip_types \
        text/plain \
        text/css \
        text/xml \
        text/javascript \
        application/json \
        application/javascript \
        application/xml+rss \
        application/rss+xml \
        application/atom+xml \
        application/xhtml+xml \
        application/x-font-ttf \
        application/x-font-opentype \
        application/vnd.ms-fontobject \
        image/svg+xml \
        image/x-icon; \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|otf)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
        access_log off; \
    } \
    \
    location ~* \.(html)$ { \
        expires 1h; \
        add_header Cache-Control "public, must-revalidate"; \
    } \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
        add_header X-Frame-Options "SAMEORIGIN" always; \
        add_header X-Content-Type-Options "nosniff" always; \
        add_header X-XSS-Protection "1; mode=block" always; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]