import logger from '../utils/logger';

function requireEnvironmnetVariable(variableName: string): string {
  const envVar = process.env[variableName];
  if (envVar === undefined) {
    const msg = `Required environment variable "${variableName}" is not set`;
    logger.error(msg);
    throw new Error(msg);
  }

  return envVar;
}

type AppConfig = {
  isProd: boolean;
  port: number;
  exampleSecret: string;
};

const appConfig: AppConfig = {
  isProd: process.env.NODE_ENV === 'production', // Anything else is treated as 'dev'
  port: Number(process.env.PORT) || 8000,
  exampleSecret: requireEnvironmnetVariable('EXAMPLE_SECRET'), // This is just an example, remove before flight.
};

export default appConfig;
