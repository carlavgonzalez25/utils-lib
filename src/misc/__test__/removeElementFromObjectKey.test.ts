import { describe, expect, test } from 'vitest'

import { removeElementFromObjectKey } from '..'

describe('removeElementFromObjectKey', () => {
  test.each([
    [{ a: 'value', b: 'value2' }, 'a', { b: 'value2' }],
    [{ a: 'value', b: 'value2' }, 'c', { a: 'value', b: 'value2' }],
    [[1, 2, 3], 'c', [1, 2, 3]]
  ])('removeElementFromObjectKey(%j) should be %j', (a, b, expected) => {
    // @ts-expect-error values could be any type
    expect(removeElementFromObjectKey(a, b)).toEqual(expected)
  })
})
