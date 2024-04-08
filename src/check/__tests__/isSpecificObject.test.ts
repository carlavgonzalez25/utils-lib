import { describe, expect, test } from 'vitest'
import { isSpecificObject } from '..'

describe('isSpecificObject', () => {
  test.each([
    [{}, true],
    [new Date(), false],
    [/a-z/, false],
    ['hola', false],
    [[], false]
  ])('isSpecificObject(%j) should be %j', (value, expected) => {
    expect(isSpecificObject(value)).toBe(expected)
  })
})
