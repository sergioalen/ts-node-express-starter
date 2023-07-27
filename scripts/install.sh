#!/bin/bash

npm install express \
    winston \
    supertest

npm install --save-dev \
    @types/express \
    gts \
    ts-node \
    nodemon \
    rimraf \
    env-cmd

npx gts init