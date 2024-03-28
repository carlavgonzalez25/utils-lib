export const removeElementsFromArray = <T>(data: T[], element: T[]): T[] => {
  if (Array.isArray(data) && Array.isArray(element)) {
    let newArray = data
    element.forEach((item) => {
      newArray = newArray.filter((el) => el !== item)
    })
    return newArray
  } else return []
}
