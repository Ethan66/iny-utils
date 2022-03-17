import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: helper', () => {
  describe('InyUtils: helper: transCount', () => {
    it('transCount must return string', () => {
      const result = inyUtils.transCount(1)
      expect(typeof result).toBe('string')
    })

    it('transCount must return result', () => {
      const result = inyUtils.transCount(100)
      expect(result).toBe('1000')

      const result2 = inyUtils.transCount(10000)
      expect(result2).toBe('1.00万')

      const result3 = inyUtils.transCount(100, false)
      expect(result3).toBe('100')
    })
  })
})
