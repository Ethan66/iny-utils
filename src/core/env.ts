let deviceEnv: string = ''

/**
 * @return { string } 返回当前浏览器系统，iOS || android
 */
export function getEnv(cache: boolean = true): string {
  if (deviceEnv && cache) return deviceEnv
  const u = navigator.userAgent
  if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    deviceEnv = 'ios'
  } else {
    deviceEnv = 'android'
  }
  return deviceEnv
}

/**
 *
 * @param type h5环境下的 env
 * @return { number } 返回在 in 系统内部下的环境数字码
 */

export function getInyEnv(type: string, cache?: boolean): number {
  switch (type) {
    case 'MINI':
      return 3

    case 'H5':
      return 4

    default:
      if (getEnv(cache) === 'ios') {
        return 2
      }

      return 1
  }
}
