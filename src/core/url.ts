import { isNull, isUnd, isPlainObject, isObject } from './is'

/**
 * inyUtils 中处理 url 参数的方法
 */

export function parseParams(value: string): any {
  if (!value || value.indexOf('&') === -1) return {}

  const arr: string[] = value.split('&')

  const params: {
    [prop: string]: any
  } = {}

  let i = 0

  while (i < arr.length) {
    if (arr[i].indexOf('=') !== -1) {
      const cur = arr[i].split('=')
      params[cur[0]] = cur[1]
    }
    i++
  }

  return params
}

export function formatParams(params: any): string {
  if (!isPlainObject(params)) return ''

  let str: string = ''

  const keys: string[] = Object.keys(params)

  for (let i = 0; i < keys.length; i++) {
    if (isNull(params[keys[i]]) || isUnd(params[keys[i]])) {
      continue
    }

    if (isObject(params[keys[i]])) {
      str += `&${keys[i]}=${JSON.stringify(params[keys[i]])}`
    } else {
      str += `&${keys[i]}=${params[keys[i]]}`
    }
  }

  return str.length ? '?' + str.substr(1) : str
}
