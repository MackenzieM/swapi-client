FROM node:20.16.0-alpine as build

ARG REACT_APP_SERVICES_HOST=/api

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

COPY ./src/public /app/public
COPY ./src/app /app/src

RUN npm install ajv --legacy-peer-deps
RUN npm install --legacy-peer-deps


RUN npm run build

FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build ./app/build /usr/share/nginx/html