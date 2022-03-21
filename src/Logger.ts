import { generateLogString, getDebugLevel, TermColors } from './utils'

export class Logger {
  level: number

  constructor(level?: string) {
    this.level = getDebugLevel(level)
  }

  warn(msg?: any, ...optionalParams: any[]): void {
    this.level > 0 && console.warn(generateLogString(TermColors.warning, '[Warning]'), msg, ...optionalParams)
  }

  info(msg?: any, ...optionalParams: any[]): void {
    this.level > 1 && console.info(generateLogString(TermColors.info, '[Info]'), msg, ...optionalParams)
  }

  debug(msg?: any, ...optionalParams: any[]): void {
    this.level > 2 && console.debug(generateLogString(TermColors.debug, '[Debug]'), msg, ...optionalParams)
  }

  verbose(msg?: any, ...optionalParams: any[]): void {
    this.level > 3 && console.debug(generateLogString(TermColors.verbose, '[Verbose]'), msg, ...optionalParams)
  }

  full(msg?: any, ...optionalParams: any[]): void {
    this.level > 4 && console.debug(generateLogString(TermColors.developer, '[Full]'), msg, ...optionalParams)
  }

  error(msg?: any, ...optionalParams: any[]): void {
    console.error(generateLogString(TermColors.error, '[Error]'), msg, ...optionalParams)
  }
}
