FROM mhart/alpine-node:latest

WORKDIR /quiz_web

COPY package.json /quiz_web

RUN yarn

ADD src /quiz_web/src
ADD public /quiz_web/public

RUN yarn build

CMD ["yarn", "start"]
