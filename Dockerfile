# Ultra-optimized multi-stage Dockerfile for SvelteKit static site
# Final image size: ~3MB with nginx

# Build stage
FROM node:22-alpine AS builder

# Install build dependencies only
RUN apk add --no-cache ca-certificates

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Production stage - nginx Alpine
FROM nginx:alpine-slim

# Copy nginx config for static files
COPY <<EOF /etc/nginx/nginx.conf
user nginx;
worker_processes auto;
error_log /dev/stderr info;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Optimize for static files
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    server {
        listen 8080;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Security
        server_tokens off;

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Cache HTML files but allow revalidation
        location ~* \.html$ {
            expires 1h;
            add_header Cache-Control "public";
        }

        # Handle SvelteKit SPA routing
        location / {
            try_files \$uri \$uri/ /index.html;
        }

        # Health check endpoint
        location /health {
            access_log off;
            return 200 "OK\n";
            add_header Content-Type text/plain;
        }
    }
}
EOF

# Copy built static files
COPY --from=builder /app/build /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Set non-root user
USER nginx

# Expose port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]