import { describe, expect, test } from 'vitest'

import { isEmpty } from '..'

describe('isEmpty', () => {
  test.each([
    ['', true],
    [[], true],
    [[1, 2, 3], false],
    [{}, true],
    [{ key: 'value' }, false],
    ['hola', true],
    [null, true]
  ])('isEmpty(%j) should be %j', (arg, expected) => {
    expect(isEmpty(arg)).toBe(expected)
  })
})
