FROM node:12

WORKDIR /usr/src/equiz
COPY package.json yarn.lock ./

RUN yarn

RUN yarn build

COPY /build .

EXPOSE 3000

CMD ["yarn", "start"]
