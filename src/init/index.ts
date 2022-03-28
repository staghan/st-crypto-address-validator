import { AppEnvironment } from '../core';
import { initApp } from './app';
import { initAppConfig } from './app/config';
import { checkEnvironment, initAppEnvironment } from './app/environment';

export default function initialize() {
  initAppConfig();
  initAppEnvironment();
  checkEnvironment();

  if (AppEnvironment.NODE_ENV !== 'test') {
    initApp();
  }
}
