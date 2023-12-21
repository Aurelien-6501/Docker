FROM node:alpine as buildBack

COPY package.json  /app/
WORKDIR /app
RUN npm install

COPY . /app

EXPOSE 8081

CMD [ "node", "index.js" ]

