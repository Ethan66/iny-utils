/**
 * 简单的合并对象的方法，只支持一级
 * @param to 目标对象
 * @param from 源对象
 * @returns 合并对象
 * @author landluck
 *
 * ```typescript
 *  const a = { name: 'lu'}
 *  const b = { age: 18 }
 *
 *  extend(a, b)
 *
 *  // a.age ==== 18 true
 * ```
 */

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }

  return to as T & U
}
