import { Logger } from '../src/Logger'

test('constructor does not crash', () => {
  const logger = new Logger()
  expect(logger).toBeDefined()
})

test('logger given nothing as parameter has level of 0', () => {
  const logger = new Logger()
  expect(logger.level).toBe(0)
})

test('logger given "1" as parameter has level of 1', () => {
  const logger = new Logger('1')
  expect(logger.level).toBe(1)
})

test('logger given "2" as parameter has level of 2', () => {
  const logger = new Logger('2')
  expect(logger.level).toBe(2)
})

test('logger given "3" as parameter has level of 3', () => {
  const logger = new Logger('3')
  expect(logger.level).toBe(3)
})

test('logger given "4" as parameter has level of 4', () => {
  const logger = new Logger('4')
  expect(logger.level).toBe(4)
})

test('logger given "5" as parameter has level of 5', () => {
  const logger = new Logger('5')
  expect(logger.level).toBe(5)
})

test('logger given "test" as parameter has level of 0', () => {
  const logger = new Logger('test')
  expect(logger.level).toBe(0)
})
