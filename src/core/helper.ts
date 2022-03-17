/**
 * inyUtils 中处理 helpers 帮助的方法
 */

export function transCount(num: number, isTrue: boolean | undefined = true): string {
  if (num < 1000 && isTrue) return '1000'
  if (num < 10000) return num.toString()
  return (num / 10000).toFixed(2) + '万'
}
