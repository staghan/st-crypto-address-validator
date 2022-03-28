import { AppEnvironment, Logger } from '../../../core';

export const initAppEnvironment = () => {
  Logger.info('|--> Environment: loading...');

  AppEnvironment.environment(process.env);
};

export const checkEnvironment = () => {
  Logger.info('|--> Environment: checking...');

  if (!AppEnvironment.NODE_ENV) throw Error('Required env : NODE_ENV : string');
  if (!AppEnvironment.PORT) throw Error('Required env : PORT : number');
  if (!AppEnvironment.INFURA_PROJECT_ID)
    throw Error('Required env : INFURA_PROJECT_ID : string');
  if (!AppEnvironment.INFURA_PROJECT_SECRET)
    throw Error('Required env : INFURA_PROJECT_SECRET : string');
};
