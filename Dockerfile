FROM node:lts-bullseye
COPY package.json yarn.lock ./
RUN npm install -g npm && \
  yarn
