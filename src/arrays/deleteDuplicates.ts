export const deleteDuplicates = <T>(data: T[]): T[] => {
  if (Array.isArray(data)) {
    const newData = new Set(data)
    return [...newData]
  }
  return data
}
