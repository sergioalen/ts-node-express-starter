#!/bin/bash

npm install \
    compression \
    cors \
    express \
    helmet \
    http-terminator \
    morgan \
    supertest \
    winston 

npm install --save-dev \
    @types/compression \
    @types/cors \
    @types/express \
    @types/morgan \
    env-cmd \
    gts \
    nodemon \
    rimraf \
    ts-node \

npx gts init