import moment from 'moment';
import { createSimpleLogger } from 'simple-node-logger';

export abstract class Logger {
  private static logger = createSimpleLogger({
    logFilePath: `api-${moment(new Date()).format('YYYY-MM-DD-HH')}.log`,
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
  });

  private static refactorParams = (...params: any[]): unknown[] => {
    return params.map((param: any) => {
      if (param && typeof param == 'object') {
        try {
          return JSON.stringify(param);
        } catch {
          return param;
        }
      }
      return param;
    });
  };

  static silly(...params: any[]) {
    this.logger.debug(...this.refactorParams(...params));
    // console.log(chalk.grey(...this.refactorParams(...params)));
  }
  static debug(...params: any[]) {
    this.logger.debug(...this.refactorParams(...params));
    // console.log(chalk.gray(...this.refactorParams(...params)));
  }
  static notice(...params: any[]) {
    this.logger.debug(...this.refactorParams(...params));
    // console.log(chalk.underline.blue(...this.refactorParams(...params)));
  }
  static info(...params: any[]) {
    this.logger.info(...this.refactorParams(...params));
    // console.info(chalk.white(...this.refactorParams(...params)));
  }
  static warning(...params: any[]) {
    this.logger.warn(...this.refactorParams(...params));
    // console.warn(chalk.yellow(...this.refactorParams(...params)));
  }
  static error(...params: any[]) {
    this.logger.error(...this.refactorParams(...params));
    // console.error(chalk.bold.red(...this.refactorParams(...params)));
  }
}
