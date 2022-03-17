import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: random', () => {
  describe('InyUtils: random: randomNum', () => {
    it('randomNum must return number', () => {
      const result = inyUtils.randomNum(1)
      expect(typeof result).toBe('number')
    })

    it('randomNum must return result', () => {
      const result = inyUtils.randomNum(1, 1)
      expect(result).toBe(1)

      const result2 = inyUtils.randomNum(10)
      expect(result2).toBeLessThan(11)

      const result3 = inyUtils.randomNum(100, 10)
      expect(result3).not.toBeLessThan(10)
      expect(result3).toBeLessThanOrEqual(100)
    })
  })

  describe('InyUtils: random: randomStr', () => {
    it('randomStr must return string', () => {
      const result = inyUtils.randomStr()
      expect(typeof result).toBe('string')
    })

    it('randomStr must return result', () => {
      const result = inyUtils.randomStr()
      expect(typeof result).toBe('string')
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
})
