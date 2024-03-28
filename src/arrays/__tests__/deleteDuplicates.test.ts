import { describe, expect, test } from 'vitest'

import { deleteDuplicates } from '../deleteDuplicates'

describe('deleteDuplicates', () => {
  test.each([
    [
      [1, 2, 3, 3, 4],
      [1, 2, 3, 4]
    ],
    ['hola', 'hola']
  ])('deleteDuplicates(%j) should be %j', (arg, expected) => {
    // @ts-expect-error arg could be any type
    expect(deleteDuplicates(arg)).toEqual(expected)
  })
})
