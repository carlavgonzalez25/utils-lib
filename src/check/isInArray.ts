export const isInArray = (data: unknown[], element: unknown): boolean => {
  return Array.isArray(data) ? data.includes(element) : false
}
