export const deleteDuplicateElementsFromArray = <T>(data: T[]): T[] => {
  const newData = new Set(data)
  return [...newData]
}
