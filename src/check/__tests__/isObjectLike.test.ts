import { describe, expect, test } from 'vitest'

import { isSpecificObject } from '..'

describe('isObjectLike', () => {
  test.each([
    [[], false],
    [{}, true],
    [new Date(), false],
    [/a-z/, false],
    [() => {}, false]
  ])('isObjectLike(%j) should return %j', (arg, expected) => {
    expect(isSpecificObject(arg)).toBe(expected)
  })
})
