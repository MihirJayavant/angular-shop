# Angular build
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --immutable --immutable-cache
COPY . .
RUN npm run build

# Final image
FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/Shop /usr/share/nginx/html
