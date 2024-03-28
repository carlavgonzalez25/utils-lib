import { type AnyFunction } from '../types/types'

export function debounce<T extends AnyFunction>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return function debouncedFunction(...args: Parameters<T>): void {
    if (timeoutId !== undefined) {
      // clearTimeout limpia la referencia del timer (resetea el timer)
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
