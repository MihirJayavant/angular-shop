FROM node:alpine as builder
WORKDIR /app
RUN npm install -g yarn
COPY package.json .
RUN yarn
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/dist/Shop /usr/share/nginx/html
