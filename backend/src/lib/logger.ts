import pino, { Logger as PinoLogger } from 'pino';
import { LOG_LEVEL } from '../config';

class Logger {
  private static instance: PinoLogger;

  static getLogger(): PinoLogger {
    if (!Logger.instance) {
      Logger.instance = pino({
        level: LOG_LEVEL
      })
    }

    return Logger.instance;
  }
}

export default Logger;
