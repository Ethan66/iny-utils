import inyUtils from '../../src/iny-utils'

/**
 * InyUtils: url test
 */
describe('InyUtils: date', () => {
  describe('InyUtils: date: formatNumber', () => {
    it('formatNumber must return string', () => {
      const result = inyUtils.formatNumber(1)
      expect(typeof result).toBe('string')
    })

    it('formatNumber must return result', () => {
      const result = inyUtils.formatNumber(1)
      expect(result).toBe('01')

      const result2 = inyUtils.formatNumber(10)
      expect(result2).toBe('10')
    })
  })

  describe('InyUtils: date: formatTime', () => {
    it('formatTime must return string', () => {
      const result = inyUtils.formatTime(new Date('2019-10-20'))
      expect(typeof result).toBe('string')
    })

    it('formatTime must return result', () => {
      const result = inyUtils.formatTime(new Date('2019-10-20'))
      expect(result).toBe('2019-10-20')

      const result2 = inyUtils.formatTime(new Date('2019-10-20 10:10:10'), true)
      expect(result2).toBe('2019-10-20 10:10:10')
    })
  })

  describe('InyUtils: date: formatTimeByFormater', () => {
    it('formatTimeByFormater must return string', () => {
      const result = inyUtils.formatTimeByFormater(new Date('2019-10-20 10:10:10'), 'YYYY-MM-DD')
      expect(typeof result).toBe('string')
    })

    it('formatTimeByFormater must return result', () => {
      const result = inyUtils.formatTimeByFormater(new Date('2019-10-20 10:10:10'), 'YYYY-MM-DD')
      expect(result).toBe('2019-10-20')

      const result1 = inyUtils.formatTimeByFormater(
        new Date('2019-10-20 10:10:10'),
        'YYYY-MM-DD HH:mm:SS'
      )
      expect(result1).toBe('2019-10-20 10:10:10')

      const result3 = inyUtils.formatTimeByFormater(new Date('2019-10-20 10:10:10'), 'YYYY')
      expect(result3).toBe('2019')

      const result4 = inyUtils.formatTimeByFormater(new Date('2019-10-20 10:10:10'), 'HH:mm:SS')
      expect(result4).toBe('10:10:10')
    })
  })

  describe('InyUtils: date: now', () => {
    it('now must return number', () => {
      const result = inyUtils.now()

      expect(typeof result).toBe('number')
    })

    it('now must return result', () => {
      const now = Math.floor(new Date().getTime() / 1000)
      const result = Math.floor(inyUtils.now() / 1000)

      expect(now).toBe(result)
    })
  })

  describe('InyUtils: date: countdown', () => {
    it('countdown must return object', () => {
      const result = inyUtils.countdown(1121212)

      expect(typeof result).toBe('object')
    })

    it('countdown must return result', () => {
      const prev = new Date('2019-10-9 11:00:00').getTime()
      const next = new Date('2019-10-10 12:00:00').getTime()
      const result = inyUtils.countdown(next - prev)
      const result2 = inyUtils.countdown(next - prev, false)
      expect(result).toEqual({
        days: '01',
        hours: '01',
        minutes: '00',
        seconds: '00'
      })

      expect(result2).toEqual({
        days: '00',
        hours: '25',
        minutes: '00',
        seconds: '00'
      })
    })
  })

  describe('InyUtils: date: ONE_DAY_TIME', () => {
    it('ONE_DAY_TIME must return number', () => {
      const result = inyUtils.ONE_DAY_TIME
      expect(typeof result).toBe('number')
    })

    it('ONE_DAY_TIME must return result', () => {
      const result = inyUtils.ONE_DAY_TIME
      expect(result).toBe(86400000)
    })
  })
})
