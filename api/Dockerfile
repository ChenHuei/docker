FROM node:17-alpine

RUN npm i -g nodemon

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
