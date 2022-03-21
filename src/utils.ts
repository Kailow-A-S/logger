import { inspect } from 'util'

export enum TermColors {
  reset = '\u001b[0m',
  error = '\u001b[38;5;196m',
  warning = '\u001b[38;5;11m',
  info = '\u001b[38;5;45m',
  debug = '\u001b[38;5;106m',
  verbose = '\u001b[38;5;189m',
  developer = '\u001b[38;5;209m',
}

export const generateLogString = (color: TermColors, msg: any) => {
  return `${color}${msg}${TermColors.reset}`
}

export const getDebugLevel = (debug?: string): number => {
  if (debug === '1') return 1
  if (debug === '2') return 2
  if (debug === '3') return 3
  if (debug === '4') return 4
  if (debug === '5') return 5
  return 0 // Only err()
}

export const fullObjString = (node: any) => {
  return inspect(node, false, null, true)
}
