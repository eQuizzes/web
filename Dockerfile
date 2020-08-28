FROM mhart/alpine-node:latest

WORKDIR /equiz

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn

RUN yarn build

COPY ./build .

EXPOSE 8080

CMD ["yarn", "start"]
