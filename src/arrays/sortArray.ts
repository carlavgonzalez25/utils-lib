const ASC = 'ASC'
const DESC = 'DESC'

export const sortArray = (data: unknown[], order: string): unknown[] => {
  if (order === ASC) {
    // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
    return data.sort()
  }
  if (order === DESC) {
    // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
    return data.sort().reverse()
  } else {
    return data
  }
}
