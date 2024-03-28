import { isSpecificObject } from '../check'
import type { GenericObject } from '../types/types'

export const removeElementFromObjectKey = (
  data: GenericObject,
  element: string | number | symbol
): GenericObject => {
  if (isSpecificObject(data)) {
    if (element in data) {
      const { [element]: remove, ...newData } = data
      return newData
    }
  }
  return data
}
