import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: env', () => {
  describe('InyUtils: env: getEnv', () => {
    it('getEnv must return string', () => {
      const result = inyUtils.getEnv()
      expect(typeof result).toBe('string')
    })

    it('getEnv must return result', () => {
      const env = inyUtils.getEnv()
      const arr = ['ios', 'android']
      expect(arr.indexOf(env)).not.toBe(-1)

      Object.defineProperty(navigator, 'userAgent', {
        writable: true,
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
      })

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
      const result = inyUtils.getEnv(false)
      expect(result).toBe('ios')

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36'

      const result1 = inyUtils.getEnv(false)
      expect(result1).toBe('android')
    })
  })

  describe('InyUtils: env: getInyEnv', () => {
    it('getEnv must return number', () => {
      const result = inyUtils.getInyEnv('MINI')
      expect(typeof result).toBe('number')
    })

    it('getEnv must return result', () => {
      const env = inyUtils.getInyEnv('MINI')

      expect(env).toBe(3)

      const env2 = inyUtils.getInyEnv('H5')

      expect(env2).toBe(4)

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
      const result = inyUtils.getInyEnv('APP', false)
      expect(result).toBe(2)

      // @ts-ignore
      window.navigator.userAgent =
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36'

      const result1 = inyUtils.getInyEnv('APP', false)
      expect(result1).toBe(1)
    })
  })
})
