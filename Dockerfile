FROM node:12-alpine3.10 as build
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app
RUN npm run build --prod

FROM nginx:1.17.8-alpine
COPY --from=build /app/dist /usr/share/nginx/html
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
