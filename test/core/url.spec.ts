import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: url', () => {
  describe('InyUtils: url: parseParams', () => {
    it('parseParms must return obj', () => {
      const result = inyUtils.parseParams('a=1')
      expect(typeof result).toBe('object')

      const result2 = inyUtils.parseParams('1')
      expect(result2).toEqual({})
    })

    it('parseParms must return value', () => {
      interface obj {
        a: string
        b: string
        c: string
      }
      const result = inyUtils.parseParams<obj>('a=1&b=adfdf&c="{a:1,b:2}"')
      expect(result.a).toBe('1')
      expect(result.b).toBe('adfdf')
      expect(result.c).toBe('"{a:1,b:2}"')

      const result2 = inyUtils.parseParams<obj>('a=1&b=adfdf&c')
      expect(result2).toEqual({
        a: '1',
        b: 'adfdf'
      })
    })
  })

  describe('InyUtils: url: formatParams', () => {
    it('formatParams must return string', () => {
      const result = inyUtils.formatParams({})
      expect(result).toBe('')

      const result2 = inyUtils.formatParams('1')
      expect(result2).toBe('')

      const result3 = inyUtils.formatParams({ a: 1, b: 2 })
      expect(result3).toBe('?a=1&b=2')
    })

    it('formatParams must return ？at first', () => {
      const result = inyUtils.formatParams({ c: 1, d: 2 })
      expect(result.substr(0, 1)).toBe('?')
    })

    it('formatParams must jump null and underfined', () => {
      const result = inyUtils.formatParams({ c: null, d: undefined })
      expect(result).toBe('')
    })

    it('formatParams must can format Array and Object', () => {
      const result = inyUtils.formatParams({ c: [1, 2], d: { c: 1, b: 2 } })
      expect(result).toBe('?c=[1,2]&d={"c":1,"b":2}')
    })
  })
})
