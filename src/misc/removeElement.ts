export const removeElementsFromArray = <T>(data: T[], element: T[]): T[] => {
  let newArray = data
  element.forEach((item) => {
    newArray = newArray.filter((el) => el !== item)
  })
  return newArray
}

type GenericObject = Record<string | number | symbol, unknown>

export const removeElementFromObjectKey = (
  data: GenericObject,
  element: string | number | symbol
): GenericObject => {
  if (element in data) {
    const { [element]: remove, ...newData } = data
    return newData
  } else return data
}
