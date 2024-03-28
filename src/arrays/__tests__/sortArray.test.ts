import { describe, expect, test } from 'vitest'

import { sortArray } from '../sortArray'
describe('sortArray', () => {
  test.each([
    [[3, 5, 1], 'ASC', [1, 3, 5]],
    [[3, 5, 1], 'DESC', [5, 3, 1]],
    [['a', 'z', 'b'], 'ASC', ['a', 'b', 'z']],
    [['a', 'z', 'b'], 'DESC', ['z', 'b', 'a']],
    [['a', 'z', 'b', 4, 1], 'ASC', [1, 4, 'a', 'b', 'z']],
    [['a', 'z', 'b', 4, 1], 'DESC', ['z', 'b', 'a', 4, 1]]
  ])('sortArray(%j) should be %j', (a, b, expected) => {
    expect(sortArray(a, b)).toEqual(expected)
  })
})
