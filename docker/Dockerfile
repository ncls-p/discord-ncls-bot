FROM node:17-alpine

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 80
EXPOSE 443


CMD yarn serve
