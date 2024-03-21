import type { AnyFunction } from '../types/types'

export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function'
}
