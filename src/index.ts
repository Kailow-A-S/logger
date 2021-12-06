import { inspect } from 'util'

const DEV = process.env.NODE_ENV === 'development'
const TEST = process.env.NODE_ENV === 'test'

enum TermColors {
  reset = '\u001b[0m',
  error = '\u001b[38;5;196m',
  warning = '\u001b[38;5;11m',
  info = '\u001b[38;5;45m',
  debug = '\u001b[38;5;106m',
  verbose = '\u001b[38;5;189m',
  developer = '\u001b[38;5;209m',
}

const generateLogString = (color: TermColors, msg: any) => {
  return `${color}${msg}${TermColors.reset}`
}

const getDebugLevel = (debug?: string): number => {
  if (debug === '1'|| TEST) return 1
  if (debug === '2') return 2
  if (debug === '3'|| DEV) return 3
  if (debug === '4') return 4
  if (debug === '5') return 5
  return 0 // Only err()
}

const DEBUG = getDebugLevel(process.env.DEBUG)

export const warn = (msg: any, ...optionalParams: any[]) => {
  if (DEBUG > 0) {
    console.warn(generateLogString(TermColors.warning, '[Warning]'), msg, ...optionalParams)
    return true
  }
  return false
}

export const info = (msg: any, ...optionalParams: any[]) => {
  if (DEBUG > 1) {
    console.info(generateLogString(TermColors.info, '[Info]'), msg, ...optionalParams)
    return true
  }
  return false
}

export const debug = (msg: any, ...optionalParams: any[]) => {
  if (DEBUG > 2) {
    console.debug(generateLogString(TermColors.debug, '[Debug]'), msg, ...optionalParams)
    return true
  }
  return false
}

export const verbose = (msg: any, ...optionalParams: any[]) => {
  if (DEBUG > 3) {
    console.debug(generateLogString(TermColors.verbose, '[Verbose]'), msg, ...optionalParams)
    return true
  }
  return false
}

export const full = (msg: any, ...optionalParams: any[]) => {
  if (DEBUG > 4) {
    console.debug(generateLogString(TermColors.developer, '[Full]'), msg, ...optionalParams)
    return true
  }
  return false
}

export const err = (msg: any, ...optionalParams: any[]) => {
  console.error(generateLogString(TermColors.error, '[Critical]'), msg, ...optionalParams)
  return true
}

export function trace(msg: any, error: Error, ...optionalParams: any[]): void;
export function trace(msg: any, ...optionalParams: any[]): void;

export function trace(msg: any, error?: Error, ...optionalParams: any[]): void {
  console.error(generateLogString(TermColors.error, '[Critical]'), msg, ...optionalParams)
  if (error)
    console.error(generateLogString(TermColors.error, '[Trace]'), error.stack)
  else
    console.error(generateLogString(TermColors.error, '[Trace]'), new Error().stack)
}

export const fullObjString = (node: any) => {
  return inspect(node, false, null, true)
}

err('hello')
info('hello')
debug('hello')
verbose('hello')
full('hello')
