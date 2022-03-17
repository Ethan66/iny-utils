/**
 * iny 工具库判断类型 is 模块
 */
export interface InyIs {
  /**
   * 判断是否为对象类型, 这里 和 isPlainObject 的区别是 isObject 为数组、FormData 都会返回 true
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const flag = inyUtils.isObject({})
   * // flag === true
   * ```
   */
  isObject(value: any): value is Object

  /**
   * 判断是否为对象类型, 这里 和 isObject 的区别是，只有 为 { a: 1 }，普通对象是才会返回true
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const flag = inyUtils.isObject({})
   * // flag === true
   * ```
   */
  isPlainObject(value: any): value is Object

  /**
   * 判断是否为数组类型
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   *
   *
   * ```typescript
   *
   * const flag = inyUtils.isArray(new Date())
   * // flag === false
   * ```
   */
  isArray(value: any): value is Array<any>

  /**
   * 判断是否为数字类型
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   *
   *
   * ```typescript
   *
   * const flag = inyUtils.isNum(1)
   * // flag === true
   * ```
   */
  isNum(value: any): value is Number

  /**
   * 判断是否为函数类型
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   *
   *
   * ```typescript
   *
   * const flag = inyUtils.isFunc(() => {})
   * // flag === true
   * ```
   */
  isFunc(value: any): value is Function

  /**
   * 判断是否为 undefined 类型
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   *
   *
   * ```typescript
   *
   * const flag = inyUtils.isUnd(undefined)
   * // flag === true
   * ```
   */
  isUnd(value: any): value is undefined

  /**
   * 判断是否为 null 类型
   * @param value 需要检测的值
   * @return 返回 true 或者 false
   * @author landluck
   *
   * ```typescript
   *
   * const flag = inyUtils.isNull(null)
   * // flag === true
   * ```
   */
  isNull(value: any): value is null

  /**
   * 判断是否为 微信浏览器
   * @param userAgent 需要检测的浏览器的 window.navigator.userAgent
   * @return 返回 true 或者 false
   * @author landluck
   *
   * ```typescript
   *
   * const flag = inyUtils.isWx(window.navigator.userAgent)
   * // flag === true
   * ```
   */
  isWx(userAgent: string): boolean
}

/**
 * iny 工具库 url 处理模块
 */
export interface InyUrl {
  /**
   * 解析 URL 后面的search参数, 假如 url 中含有 json 对象，会返回 json 字符串，需要使用自行json化
   * @param value 需要解析的值
   * @return 返回 一个对象, 例如 { a: 1, b: 2 }
   * @author landluck
   * ```typescript
   *
   * interface User {
   *  name: string
   *  age: number
   * }
   * const user = inyUtils.parseParams<User>('name=lu&age=18')
   * // user.name ===  'lu' user.age === 18
   * ```
   */
  parseParams<T>(value: string): T

  /**
   * 自动根据对象合成 url 后面的参数，对象会直接转为json字符串，包括数组、普通对象，为兼容小程序使用
   * @param value 需要转换的值 例如 { a: 1, b: 2 }
   * @return 返回 一个字符串, 例如 '?a=1&b=2'
   * @author landluck
   * ```typescript
   * const info = {
   *  a: 1,
   *  b: 2f
   * }
   * const searchStr = inyUtils.formatParams(info)
   * // searchStr === '?a=1&b=2'
   * ```
   */
  formatParams(value: Object): string
}

/**
 * iny 工具库 Date 时间模块
 */

export interface InyDate {
  /**
   * 常量，一天的时间，单位为 ms
   * @return 返回一天的时间，单位为 ms
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.ONE_DAY_TIME
   * // result === 86400000
   * ```
   */
  ONE_DAY_TIME: number
  /**
   * 格式化时间数字, 将 1 转换我 '01'
   * @param value 需要转换的值
   * @return 返回一个字符串
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.formatNumber(1)
   * // result === '01'
   * ```
   */
  formatNumber(value: number): string

  /**
   * 格式化时间对象
   * @param value 需要转换的值
   * @param hasHour 是否需要小时部分，默认 false
   * @return 返回一个字符串
   * @author landluck
   * ```typescript
   *
   * const time = inyUtils.formatTime(new Date('2018-9-20'), true)
   * // time === '2018-09-20 00:00:00'
   * const time2 = inyUtils.formatTime(new Date('2018-9-20'))
   * /// time2 === '2018-09-20'
   * ```
   */
  formatTime(value: Date, hasHour?: boolean): string

  /**
   * 格式化时间对象，通过传入 formater
   * @param value 需要转换的值
   * @return 返回一个字符串
   * @author landluck
   * ```typescript
   *
   * const time = inyUtils.formatTimeByFormater(new Date('2018-9-20'), 'YYYY-MM-DD')
   * // time === '2018-09-20'
   * ```
   */
  formatTimeByFormater(value: Date, formater: string): string

  /**
   * 获取当前系统时间戳
   * @return 返回当前系统时间戳
   * @author landluck
   * ```typescript
   *
   * const time = inyUtils.now()
   * // time === 156758683624876
   * ```
   */
  now(): number

  /**
   * 根据剩余时间，计算剩余的天、小时、分钟、秒
   * @param value 剩余时间毫秒数
   * @param hasDay 是否要计算出天，默认为true，传 false，会将天数叠加到小时上，比如 48小时
   * @return 返回当前系统时间戳
   * @author landluck
   * ```typescript
   *
   * const timeObj = inyUtils.countdown(12121212)
   * ```
   */
  countdown(
    value: number,
    hasDay?: boolean
  ): {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
}

/**
 * iny 工具库 Verify 校验模块
 */

export interface InyVerify {
  /**
   * 校验手机号
   * @param value 需要校验的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.verifyMobile('15555555555')
   * // result === true
   * ```
   */
  verifyMobile(value: string): boolean

  /**
   * 校验验证码
   * @param value 需要校验的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.verifyCode('146772')
   * // result === true
   * ```
   */
  verifyCode(value: string): boolean

  /**
   * 校验身份证
   * @param value 需要校验的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.verifyCard('x')
   * // result === false
   * ```
   */
  verifyCard(value: string): boolean

  /**
   * 校验身份证
   * @param value 需要校验的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.verifyEmail('2355@qq.com')
   * // result === true
   * ```
   */
  verifyEmail(value: string): boolean

  /**
   * 校验是否为http链接
   * @param value 需要校验的值
   * @return 返回 true 或者 false
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.verifyHttp('https://www.f.cn')
   * // result === true
   * ```
   */
  verifyHttp(value: string): boolean
}

/**
 * iny 工具库 random 随机模块
 */

export interface InyRandom {
  /**
   * 随机数字
   * @param max 最大值
   * @param min 最小值, 默认为 0
   * @return 返回 随机数字
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.randomNum(10, 1)
   * // result === 5
   * ```
   */
  randomNum(max: number, min?: number): number

  /**
   * 随机字符串
   * @return 返回 随机字符串
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.randomStr()
   * // result === 'fdfjjoj2ndf'
   * ```
   */
  randomStr(): string
}

/**
 * iny 工具库 InyHelpers 帮助模块，常用不分类函数
 */

export interface InyHelpers {
  /**
   * 将数量转换为文字，比如 10000 为 1 万
   * @param num 数量
   * @param isTrue 是否为假数据
   * @return 返回 string
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.transCount(10)
   * // result === 1000
   * ```
   */
  transCount(num: number, isTrue?: boolean): string
}

/**
 * iny 工具库 InyEnv 环境变量模块
 */

export interface InyEnv {
  /**
   * 获取当前浏览器是安卓还是ios
   * @param cache 是否使用缓存，默认使用
   * @return 返回 'ios' 或者 'android'
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.getEnv()
   * // result === android
   * ```
   */
  getEnv(cache?: boolean): string

  /**
   * 根据传入的值判断在 iny 体系内的数字码
   * @param type 对应字符串, 比如 'MINI' 'H5' "APP"
   * @param cache getInyEnv 内部是使用了 getEnv, cache适用于 getEnv 是否缓存的参数
   * @return 返回 1、2、3、4、5
   * @author landluck
   * ```typescript
   *
   * const result = inyUtils.getEnv('MINI')
   * // result === 3
   * ```
   */
  getInyEnv(type: string, cache?: boolean): number
}

/**
 * iny 工具库 inyUtils 实例，包括了 inyUtils 和其他所有模块的能力·
 */
export interface InyUtils
  extends InyIs,
    InyUrl,
    InyDate,
    InyVerify,
    InyHelpers,
    InyRandom,
    InyEnv {}
