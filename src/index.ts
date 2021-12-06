import { inspect } from 'util'

const DEV = process.env.NODE_ENV === 'development'
const TEST = process.env.NODE_ENV === 'test'

enum TermColors {
  reset = '\x1b[0m',
  error = '\x1b[1;31m', // red
  warning = '\x1b[1;33m', // yellow
  info = '\x1b[1;34m', // blue
  debug = '\x1b[1;36m', // cyan
  verbose = '\x1b[34m', // green
  developer = '\x1b[35m', // magenta
}

const generateLogString = (color: TermColors, msg: any) => {
  return `${color}${msg}${TermColors.reset}`
}

const getDebugLevel = (debug?: string): number => {
  if (debug === '1') return 1
  if (debug === '2'|| TEST) return 2
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
