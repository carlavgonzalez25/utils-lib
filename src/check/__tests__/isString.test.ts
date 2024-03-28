import { describe, expect, test } from 'vitest'

import { isString } from '..'

describe('isString', () => {
  test.each([
    ['', true],
    [undefined, false],
    [2, false],
    [{}, false],
    [[], false]
  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
})
