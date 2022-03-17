import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: verify', () => {
  describe('InyUtils: verify: verifyHttp', () => {
    it('verifyHttp must return boolean', () => {
      const result = inyUtils.verifyHttp('a=1')
      expect(typeof result).toBe('boolean')
    })

    it('verifyHttp must return result', () => {
      const result = inyUtils.verifyHttp('a=1')
      expect(result).toBeFalsy()

      const result2 = inyUtils.verifyHttp('1')
      expect(result2).toBeFalsy()

      const result4 = inyUtils.verifyHttp('https://f.com')
      expect(result4).toBeTruthy()

      const result5 = inyUtils.verifyHttp('http://cccc.net')
      expect(result5).toBeTruthy()

      const result6 = inyUtils.verifyHttp(' http://cccc.net ')
      expect(result6).toBeTruthy()
    })
  })

  describe('InyUtils: verify: verifyMobile', () => {
    it('verifyMobile must return boolean', () => {
      const result = inyUtils.verifyMobile('1')
      expect(typeof result).toBe('boolean')
    })

    it('verifyMobile must return result', () => {
      const result = inyUtils.verifyMobile('1')
      expect(result).toBeFalsy()

      const result1 = inyUtils.verifyMobile('155555555566')
      expect(result1).toBeFalsy()

      const result3 = inyUtils.verifyMobile('25555555555')
      expect(result3).toBeFalsy()

      const result4 = inyUtils.verifyMobile('15555555555')
      expect(result4).toBeTruthy()
    })
  })

  describe('InyUtils: verify: verifyCode', () => {
    it('verifyCode must return boolean', () => {
      const result = inyUtils.verifyCode('12121')
      expect(typeof result).toBe('boolean')
    })

    it('verifyCode must return result', () => {
      const result = inyUtils.verifyCode('1')
      expect(result).toBeFalsy()

      const result1 = inyUtils.verifyCode('1111111')
      expect(result1).toBeFalsy()

      const result3 = inyUtils.verifyCode('123456')
      expect(result3).toBeTruthy()
    })
  })

  describe('InyUtils: verify: verifyCard', () => {
    it('verifyCard must return boolean', () => {
      const result = inyUtils.verifyCard('1')
      expect(typeof result).toBe('boolean')
    })

    it('verifyCard must return result', () => {
      const result = inyUtils.verifyCard('')
      expect(result).toBeFalsy()

      const result1 = inyUtils.verifyCard('')
      expect(result1).toBeFalsy()

      const result2 = inyUtils.verifyCard('123456789012345')
      expect(result2).toBeTruthy()

      const result3 = inyUtils.verifyCard('123456789012345612')
      expect(result3).toBeTruthy()

      const result4 = inyUtils.verifyCard('12345678901234562x')
      expect(result4).toBeTruthy()
    })
  })

  describe('InyUtils: verify: verifyEmail', () => {
    it('verifyEmail must return boolean', () => {
      const result = inyUtils.verifyEmail('1')
      expect(typeof result).toBe('boolean')
    })

    it('verifyEmail must return result', () => {
      const result = inyUtils.verifyEmail('')
      expect(result).toBeFalsy()

      const result1 = inyUtils.verifyEmail('')
      expect(result1).toBeFalsy()

      const result2 = inyUtils.verifyEmail('111111111@qq.com')
      expect(result2).toBeTruthy()

      const result3 = inyUtils.verifyEmail('fff@163.com')
      expect(result3).toBeTruthy()

      const result4 = inyUtils.verifyEmail('1111_fff@gmail.com')
      expect(result4).toBeTruthy()
    })
  })
})
