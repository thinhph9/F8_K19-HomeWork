FROM node:alpine3.23

WORKDIR /react-docker-app

COPY package*.json ./

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]