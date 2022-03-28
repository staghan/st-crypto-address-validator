import express from 'express';
import { AppEnvironment, Logger } from '../../core';
import appConfig from '../../config/app/config';
import routes from '../../routes';

export const initApp = async () => {
  Logger.info('|--> App: loading...');

  const app = express();

  const middlewares = [...appConfig.middlewares];

  middlewares.forEach((m) => app.use(m));

  routes(app);

  const PORT = AppEnvironment.PORT || 2022;

  app.listen(PORT, () => Logger.info(`|--> Api running on port ${PORT}!`));

  return app;
};
