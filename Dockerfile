FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
ARG ENV=prod
ENV ENV=$ENV
COPY ./environment/$ENV.env ./.env
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html