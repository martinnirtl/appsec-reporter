FROM node:16 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./ .

RUN npm run build

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf