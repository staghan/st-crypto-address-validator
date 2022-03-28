import { toNumber } from 'lodash';
import { AppEnvironmentKeys } from '../../types/config.constants';

export class AppEnvironment {
  private static _environment: Record<string, any>;

  private static _getAsString(key: AppEnvironmentKeys): string {
    return AppEnvironment._environment[key];
  }

  private static _getAsNumber(key: AppEnvironmentKeys): number {
    return toNumber(AppEnvironment._environment[key]);
  }

  private static _set(key: AppEnvironmentKeys, value: any) {
    AppEnvironment._environment[key] = value;
  }

  static environment(env: NodeJS.ProcessEnv) {
    AppEnvironment._environment = env;
  }

  static get NODE_ENV() {
    return this._getAsString('NODE_ENV');
  }

  static get PORT() {
    return this._getAsNumber('PORT');
  }

  static get INFURA_PROJECT_ID() {
    return this._getAsString('INFURA_PROJECT_ID');
  }

  static get INFURA_PROJECT_SECRET() {
    return this._getAsString('INFURA_PROJECT_SECRET');
  }
}
