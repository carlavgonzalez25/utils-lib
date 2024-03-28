import { describe, expect, test } from 'vitest'

import { isFunction } from '..'

describe('isFunction', () => {
  test.each([
    [() => {}, true],
    [[], false],
    [{}, false],
    ['hola', false],
    [123, false]
  ])('isFunction(%j) should return %j', (arg, expected) => {
    expect(isFunction(arg)).toBe(expected)
  })
})
