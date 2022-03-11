FROM node:16 AS build-env

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM gcr.io/distroless/nodejs:16

ENV NODE_ENV production

WORKDIR /app
COPY --from=build-env /app ./

CMD ["server/index.js"]

EXPOSE 3000