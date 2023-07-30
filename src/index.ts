import app from './app';
import {createHttpTerminator} from 'http-terminator';
import logger from './utils/logger';
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const httpTerminator = createHttpTerminator({
  server,
  gracefulTerminationTimeout: 1000,
});

async function shutdown(signal: string) {
  logger.info(`${signal} signal received: closing HTTP server`);
  await httpTerminator.terminate();
  server.close(() => {
    logger.info('HTTP server closed');
  });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

export default server;
