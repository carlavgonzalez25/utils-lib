import { describe, expect, test } from 'vitest'

import { isInArray } from '..'

describe('isInArray', () => {
  test.each([
    [[1, 2, 3], 1, true],
    [['a', 'b', 'cc'], 'c', false],
    [[true, false, true], true, true],
    [[], 1, false],
    ['hola', 'h', false]
  ])('isInArray(%j) should be %j', (a, b, expected) => {
    // @ts-expect-error value could be anything
    expect(isInArray(a, b)).toBe(expected)
  })
})
