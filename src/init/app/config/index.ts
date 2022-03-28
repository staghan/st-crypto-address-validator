import { AppConfig, Logger } from '../../../core';
import config from '../../../config/app/config';

export const initAppConfig = () => {
  Logger.info('|--> Config: loading...');

  AppConfig.init(config.name, config.version);
};
