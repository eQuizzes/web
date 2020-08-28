FROM mhart/alpine-node:latest

WORKDIR /equiz

COPY package*.json /equiz
COPY yarn*.lock /equiz
RUN yarn

RUN yarn build

COPY /build /equiz

EXPOSE 8080

CMD ["yarn", "start"]
