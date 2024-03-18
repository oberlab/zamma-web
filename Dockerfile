FROM alpine:latest

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]