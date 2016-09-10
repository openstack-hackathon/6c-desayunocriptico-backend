FROM alpine:3.3

MAINTAINER "donkike" <siul.hector@gmail.com>

ENV NODE_VERSION 6.2.0

RUN apk add --no-cache --virtual .run-deps nodejs@$NODE_VERSION

WORKDIR /src
COPY ./package.json /src/package.json
RUN npm install

COPY . /src
EXPOSE 3000
EXPOSE 1337

ENTRYPOINT ["npm", "start"]
