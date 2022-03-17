import inyUtils from '../src/iny-utils'

/**
 * InyUtils test inyUtils 必须拥有 interface 中定义的每一个方法
 */
describe('InyUtils', () => {
  // is 模块
  it('InyUtils must has isArray function', () => {
    expect(typeof inyUtils.isArray).toBe('function')
  })
  it('InyUtils must has isObject function', () => {
    expect(typeof inyUtils.isObject).toBe('function')
  })
  it('InyUtils must has isPlainObject function', () => {
    expect(typeof inyUtils.isPlainObject).toBe('function')
  })
  it('InyUtils must has isNum function', () => {
    expect(typeof inyUtils.isNum).toBe('function')
  })
  it('InyUtils must has isFunc function', () => {
    expect(typeof inyUtils.isFunc).toBe('function')
  })
  it('InyUtils must has isUnd function', () => {
    expect(typeof inyUtils.isUnd).toBe('function')
  })
  it('InyUtils must has isNull function', () => {
    expect(typeof inyUtils.isNull).toBe('function')
  })
  it('InyUtils must has isWx function', () => {
    expect(typeof inyUtils.isWx).toBe('function')
  })

  // date 模块
  it('InyUtils must has formatNumber function', () => {
    expect(typeof inyUtils.formatNumber).toBe('function')
  })
  it('InyUtils must has formatTime function', () => {
    expect(typeof inyUtils.formatTime).toBe('function')
  })
  it('InyUtils must has formatTimeByFormater function', () => {
    expect(typeof inyUtils.formatTimeByFormater).toBe('function')
  })
  it('InyUtils must has now function', () => {
    expect(typeof inyUtils.now).toBe('function')
  })
  it('InyUtils must has countdown function', () => {
    expect(typeof inyUtils.countdown).toBe('function')
  })
  it('InyUtils must has ONE_DAY_TIME const', () => {
    expect(typeof inyUtils.ONE_DAY_TIME).toBe('number')
  })

  // url 模块
  it('InyUtils must has parseParams function', () => {
    expect(typeof inyUtils.parseParams).toBe('function')
  })
  it('InyUtils must has formatParams function', () => {
    expect(typeof inyUtils.formatParams).toBe('function')
  })

  // random 模块
  it('InyUtils must has randomNum function', () => {
    expect(typeof inyUtils.randomNum).toBe('function')
  })
  it('InyUtils must has randomStr function', () => {
    expect(typeof inyUtils.randomStr).toBe('function')
  })

  // verify 模块
  it('InyUtils must has verifyHttp function', () => {
    expect(typeof inyUtils.verifyHttp).toBe('function')
  })
  it('InyUtils must has verifyMobile function', () => {
    expect(typeof inyUtils.verifyMobile).toBe('function')
  })
  it('InyUtils must has verifyCode function', () => {
    expect(typeof inyUtils.verifyCode).toBe('function')
  })
  it('InyUtils must has verifyCard function', () => {
    expect(typeof inyUtils.verifyCard).toBe('function')
  })
  it('InyUtils must has verifyEmail function', () => {
    expect(typeof inyUtils.verifyEmail).toBe('function')
  })

  // helpers 模块
  it('InyUtils must has transCount function', () => {
    expect(typeof inyUtils.transCount).toBe('function')
  })

  // env 模块
  it('InyUtils must has getEnv function', () => {
    expect(typeof inyUtils.getEnv).toBe('function')
  })
  it('InyUtils must has getInyEnv function', () => {
    expect(typeof inyUtils.getInyEnv).toBe('function')
  })
})
