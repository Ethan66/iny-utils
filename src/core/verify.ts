/**
 * inyUtils 中处理 verify 校验的方法
 */

export function verifyHttp(value: string): boolean {
  return /^http[s]?:\/\/.*/.test(value.trim())
}

export function verifyMobile(mobile: string): boolean {
  const reg = /^1\d{10}$/
  return reg.test(mobile.trim())
}

export function verifyCode(code: string): boolean {
  const reg = /^\d{6}$/
  return reg.test(code)
}

export function verifyCard(card: string): boolean {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(card)
}

export function verifyEmail(email: string): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.trim())
}
