# Angular build
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --immutable --immutable-cache
COPY . .
RUN npm run build

# Final image
FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/shop/browser /usr/share/nginx/html
