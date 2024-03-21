// Función que verifica si un array o un objeto está vacío y devuelve true si lo está o false si no lo está

// isEmpty('franco') // true
// isEmpty(null) // true
// isEmpty([]) // true
// isempty({}) // true
// isEmpty([1]) // false

export const isEmpty = (data: unknown): boolean => {
  const safeObject = data
  if (typeof safeObject !== 'object' || safeObject === null) return true
  return Object.values(safeObject).length === 0
}
