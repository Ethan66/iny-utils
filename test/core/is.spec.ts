import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: is', () => {
  describe('InyUtils: is: isArray', () => {
    it('isArray must return boolean', () => {
      const result = inyUtils.isArray('a=1')
      expect(typeof result).toBe('boolean')

      const result2 = inyUtils.isArray(null)
      expect(typeof result2).toBe('boolean')
    })

    it('isArray must return result', () => {
      const result = inyUtils.isArray('a=1')
      expect(result).toBeFalsy()

      const result2 = inyUtils.isArray({})
      expect(result2).toBeFalsy()

      const result3 = inyUtils.isArray(undefined)
      expect(result3).toBeFalsy()

      const result4 = inyUtils.isArray([])
      expect(result4).toBeTruthy()

      const result5 = inyUtils.isArray(new Array())
      expect(result5).toBeTruthy()
    })
  })

  describe('InyUtils: is: isObject', () => {
    it('isObject must return boolean', () => {
      const result = inyUtils.isObject(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isObject must return result', () => {
      const result = inyUtils.isObject(new FormData())
      expect(result).toBeTruthy()

      const result1 = inyUtils.isObject(new URLSearchParams())
      expect(result1).toBeTruthy()

      const result3 = inyUtils.isObject({})
      expect(result3).toBeTruthy()

      const result4 = inyUtils.isObject(null)
      expect(result4).toBeFalsy()

      const result5 = inyUtils.isObject([])
      expect(result5).toBeTruthy()

      const result6 = inyUtils.isObject(1)
      expect(result6).toBeFalsy()

      const result7 = inyUtils.isObject(() => {})
      expect(result7).toBeFalsy()
    })
  })

  describe('InyUtils: is: isPlainObject', () => {
    it('isPlainObject must return boolean', () => {
      const result = inyUtils.isPlainObject(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isPlainObject must return result', () => {
      const result = inyUtils.isPlainObject(new FormData())
      expect(result).toBeFalsy()

      const result1 = inyUtils.isPlainObject(new URLSearchParams())
      expect(result1).toBeFalsy()

      const result3 = inyUtils.isPlainObject({})
      expect(result3).toBeTruthy()

      const result4 = inyUtils.isPlainObject(null)
      expect(result4).toBeFalsy()

      const result5 = inyUtils.isPlainObject([])
      expect(result5).toBeFalsy()

      const result6 = inyUtils.isPlainObject(1)
      expect(result6).toBeFalsy()

      const result7 = inyUtils.isPlainObject(() => {})
      expect(result7).toBeFalsy()
    })
  })

  describe('InyUtils: is: isNum', () => {
    it('isNum must return boolean', () => {
      const result = inyUtils.isNum(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isNum must return result', () => {
      const result = inyUtils.isNum(new FormData())
      expect(result).toBeFalsy()

      const result1 = inyUtils.isNum({})
      expect(result1).toBeFalsy()

      const result2 = inyUtils.isNum(1)
      expect(result2).toBeTruthy()

      const result3 = inyUtils.isNum(Infinity)
      expect(result3).toBeTruthy()

      const result4 = inyUtils.isNum(NaN)
      expect(result4).toBeTruthy()
    })
  })

  describe('InyUtils: is: isFunc', () => {
    it('isFunc must return boolean', () => {
      const result = inyUtils.isFunc(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isFunc must return result', () => {
      const result = inyUtils.isFunc(new FormData())
      expect(result).toBeFalsy()

      const result1 = inyUtils.isFunc({})
      expect(result1).toBeFalsy()

      const result2 = inyUtils.isFunc(() => {})
      expect(result2).toBeTruthy()

      const result3 = inyUtils.isFunc(function f() {})
      expect(result3).toBeTruthy()
    })
  })

  describe('InyUtils: is: isUnd', () => {
    it('isUnd must return boolean', () => {
      const result = inyUtils.isUnd(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isUnd must return result', () => {
      const result = inyUtils.isUnd(new FormData())
      expect(result).toBeFalsy()

      const result1 = inyUtils.isUnd({})
      expect(result1).toBeFalsy()

      const result2 = inyUtils.isUnd(undefined)
      expect(result2).toBeTruthy()
    })
  })

  describe('InyUtils: is: isNull', () => {
    it('isNull must return boolean', () => {
      const result = inyUtils.isNull(new FormData())
      expect(typeof result).toBe('boolean')
    })

    it('isNull must return result', () => {
      const result = inyUtils.isNull(new FormData())
      expect(result).toBeFalsy()

      const result1 = inyUtils.isNull({})
      expect(result1).toBeFalsy()

      const result2 = inyUtils.isNull(null)
      expect(result2).toBeTruthy()
    })
  })

  describe('InyUtils: is: isWx', () => {
    it('isWX must return boolean', () => {
      const result = inyUtils.isWx('')
      expect(typeof result).toBe('boolean')
    })

    it('isWx must return result', () => {
      const result = inyUtils.isWx('fff')
      expect(result).toBeFalsy()

      const result1 = inyUtils.isWx(
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1'
      )
      expect(result1).toBeFalsy()

      const result2 = inyUtils.isWx(
        'Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN'
      )
      expect(result2).toBeTruthy()
    })
  })
})
