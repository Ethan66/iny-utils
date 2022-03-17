/**
 * inyUtils 中随机方法
 */

export function randomNum(max: number, min: number | undefined = 0): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomStr(): string {
  return Math.random()
    .toString()
    .substr(2)
}
