import type { GenericObject } from '../types/types'

export const removeElementsFromArray = <T>(data: T[], element: T[]): T[] => {
  let newArray = data
  element.forEach((item) => {
    newArray = newArray.filter((el) => el !== item)
  })
  return newArray
}

export const removeElementFromObjectKey = (
  data: GenericObject,
  element: string | number | symbol
): GenericObject => {
  if (element in data) {
    const { [element]: remove, ...newData } = data
    return newData
  } else return data
}
