const ASC = 'ASC'
const DESC = 'DESC'

export const sortArray = (data: unknown[], order: string): unknown[] => {
  if (order === ASC) {
    return data.sort()
  }
  if (order === DESC) {
    return data.sort().reverse()
  } else {
    return data
  }
}
