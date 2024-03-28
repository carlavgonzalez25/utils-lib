import { describe, expect, test } from 'vitest'

import { removeElementsFromArray } from '../removeElementsFromArray'

describe('removeElementsFromArray', () => {
  test.each([
    [
      [1, 2, 3, 4, 5],
      [1, 2],
      [3, 4, 5]
    ],
    [[1, 2, 3], 1, []],
    [1, 1, []],
    [{ a: 'value' }, 'a', []]
  ])('removeElementsFromArray(%j) should be %j', (a, b, expected) => {
    // @ts-expect-error value could be anything
    expect(removeElementsFromArray(a, b)).toEqual(expected)
  })
})
