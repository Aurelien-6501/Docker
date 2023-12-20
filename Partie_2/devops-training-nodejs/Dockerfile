FROM debian:10

RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash 
RUN apt-get install nodejs -yq 
RUN apt-get clean -

ADD . /app/
WORKDIR /app
RUN npm install

EXPOSE 3000
VOLUME /app/logs

CMD npm run start
