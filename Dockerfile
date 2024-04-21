FROM node:18.20.0-slim

USER root

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

EXPOSE 3006 

CMD [ "sh", "-c", "npm install" ]
