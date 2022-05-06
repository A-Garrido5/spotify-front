FROM node:lts-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./
#RUN npm install vue bootstrap bootstrap-vue
RUN npm install 

COPY . .

RUN npm run build 

EXPOSE 8080:8080

CMD ["npm", "run", "serve"]

