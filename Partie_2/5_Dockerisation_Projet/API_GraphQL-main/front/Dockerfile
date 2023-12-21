FROM node:alpine as buildFront

WORKDIR /app/front
COPY package.json  .
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=buildFront /app/front/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]