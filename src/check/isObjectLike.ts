import { typeOf } from '../misc'
import type { GenericObject } from '../types/types'

export function isSpecificObject(value: unknown): value is GenericObject {
  return (
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !Array.isArray(value) &&
    typeOf(value) === 'object'
  )
}
