import { isNum } from './is'

/**
 * inyUtils 中处理 Date 时间的方法
 */

export function formatNumber(value: number): string {
  const str: string = value.toString()

  return str[1] ? str : `0${str}`
}

export function formatTime(value: Date, hasHour?: boolean): string {
  const year = value.getFullYear()
  const month = value.getMonth() + 1
  const day = value.getDate()

  const hour = value.getHours()
  const minute = value.getMinutes()
  const second = value.getSeconds()

  if (hasHour) {
    return (
      [year, month, day].map(formatNumber).join('-') +
      ' ' +
      [hour, minute, second].map(formatNumber).join(':')
    )
  } else {
    return [year, month, day].map(formatNumber).join('-')
  }
}

export function formatTimeByFormater(value: Date, formater: string): string {
  const info: {
    [propName: string]: any
  } = {
    YYYY: value.getFullYear(),
    MM: value.getMonth() + 1,
    DD: value.getDate(),
    HH: value.getHours(),
    mm: value.getMinutes(),
    SS: value.getSeconds()
  }

  Object.keys(info).forEach(key => {
    formater = formater.replace(key, formatNumber(info[key]))
  })

  return formater
}

export function now(): number {
  return new Date().getTime()
}

export const ONE_DAY_TIME = 86400000

export function countdown(
  value: number,
  hasDay: boolean = true
): {
  days: string
  hours: string
  minutes: string
  seconds: string
} {
  let days = 0
  let hours = 0
  // 有天
  if (hasDay) {
    days = Math.floor(value / 1000 / 60 / 60 / 24) // 计算剩余天
    hours = Math.floor((value / 1000 / 60 / 60) % 24)
  } else {
    hours = Math.floor(value / 1000 / 60 / 60)
  }
  const minutes = Math.floor((value / 1000 / 60) % 60)
  const seconds = Math.floor((value / 1000) % 60)

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds)
  }
}
