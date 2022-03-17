/**
 * inyUtils 中判断类型的方法
 */

/**
 * @ignore
 */
const toString = Object.prototype.toString

export function isArray(value: any): value is Array<any> {
  return typeof value !== 'undefined' && value instanceof Array
}

export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object'
}

export function isPlainObject(value: any): value is Object {
  return toString.call(value) === '[object Object]'
}

export function isNum(value: any): value is Number {
  return typeof value === 'number'
}

export function isFunc(value: any): value is Function {
  return typeof value === 'function'
}

export function isUnd(value: any): value is undefined {
  return typeof value === 'undefined'
}

export function isNull(value: any): value is null {
  return value === null
}

export function isWx(userAgent: string): boolean {
  return userAgent.toLowerCase().indexOf('micromessenger') !== -1
}
