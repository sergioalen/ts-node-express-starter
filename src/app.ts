import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import helmet from 'helmet';

import logger from './utils/logger';
import loggerMiddleware from './utils/logger-middleware';

const app = express();

process.on('uncaughtExceptionMonitor', (error, origin) => {
  logger.error(error.name, {stack: error.stack, origin});
});

app.use(cors()); // Set up your cors rules here
app.use(helmet()); // Set up your helmet config here
app.use(loggerMiddleware);
app.use(compression()); // Not required if using reverse proxy
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
