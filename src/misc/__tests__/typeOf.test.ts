import { describe, expect, test } from 'vitest'
import { typeOf } from '../typeOf'

describe('typeOf', () => {
  test.each([
    [null, 'null'],
    [[1, 2, 3], 'object'],
    [{}, 'object'],
    ['hola', 'string'],
    [1, 'number'],
    [() => null, 'function'],
    [new Date(), 'object'],
    [true, 'boolean']
  ])('typeOf(%j) should be %j', (value, expected) => {
    expect(typeOf(value)).toBe(expected)
  })
})
