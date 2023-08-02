FROM node:18-alpine AS base
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

FROM base AS builder-server
WORKDIR /home/node/app
COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
USER node
RUN npm install --ignore-scripts --loglevel warn --omit=dev

FROM builder-server AS builder-client
WORKDIR /home/node/app
COPY --chown=node:node . ./
USER node
RUN npm install --loglevel warn
EXPOSE 8000
CMD ["npm", "start"]

FROM base AS production
WORKDIR /home/node/app
USER node
COPY --chown=node:node --from=builder-client /home/node/app/build/src ./build/src
COPY --chown=node:node --from=builder-server /home/node/app/node_modules ./node_modules
COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
EXPOSE 8000
CMD ["node", "build/src/index.js"]
