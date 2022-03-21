import * as utils from '../src/utils'

test('getDebugLevel given nothing returns 0', () => {
  expect(utils.getDebugLevel()).toBe(0)
})

test('getDebugLevel given "0" returns 0', () => {
  expect(utils.getDebugLevel('0')).toBe(0)
})

test('getDebugLevel given "1" returns 1', () => {
  expect(utils.getDebugLevel('1')).toBe(1)
})

test('getDebugLevel given "2" returns 2', () => {
  expect(utils.getDebugLevel('2')).toBe(2)
})

test('getDebugLevel given "3" returns 3', () => {
  expect(utils.getDebugLevel('3')).toBe(3)
})

test('getDebugLevel given "4" returns 4', () => {
  expect(utils.getDebugLevel('4')).toBe(4)
})

test('getDebugLevel given "5" returns 5', () => {
  expect(utils.getDebugLevel('5')).toBe(5)
})

test('getDebugLevel given something else returns 0', () => {
  expect(utils.getDebugLevel('test')).toBe(0)
})

