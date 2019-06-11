FROM node:8 as react-build

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package*.json yarn.lock ./

RUN npm install

COPY . ./

EXPOSE 3000

RUN ["npm", "start"]
