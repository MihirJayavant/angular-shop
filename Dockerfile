# Server side rendering build
FROM node:12-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn run build:ssr

# Final image
FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/dist /app/dist
CMD ["node", "dist/server.js"]
