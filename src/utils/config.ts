import logger from './logger';
export const ENVIRONMENT = process.env.NODE_ENV;

type Config = {
  isProd: boolean;
  exampleSecret: string;
};

function requireEnvironmnetVariable(variableName: string) {
  const envVar = process.env[variableName];
  if (envVar === undefined) {
    const msg = `Required environment variable "${variableName}" is not set`;
    logger.error(msg);
    throw new Error(msg);
  }

  return envVar;
}

const config: Config = {
  isProd: ENVIRONMENT === 'production', // Anything else is treated as 'dev'
  exampleSecret: requireEnvironmnetVariable('EXAMPLE_SECRET'), // This is just an example, remove before flight.
};

export default config;
