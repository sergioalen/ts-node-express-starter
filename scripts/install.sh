#!/bin/bash

npm install \
    compression \
    cors \
    express \
    express-async-handler \
    helmet \
    http-terminator \
    morgan \
    supertest \
    winston 

npm install --save-dev \
    @types/compression \
    @types/cors \
    @types/express \
    @types/jest \
    @types/morgan \
    @types/supertest \
    env-cmd \
    gts \
    jest \
    nodemon \
    rimraf \
    ts-jest \
    ts-node \

npx gts init