# Server side rendering build
FROM node:22-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build:ssr

# Final image
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist/server /app/dist
CMD ["node", "dist/server.js"]
