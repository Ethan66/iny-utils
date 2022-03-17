import * as is from './core/is'
import * as url from './core/url'
import * as date from './core/date'
import * as verify from './core/verify'
import * as random from './core/random'
import * as helper from './core/helper'
import * as env from './core/env'

import { InyUtils } from './types'
import { extend } from './helpers/utils'

export * from './types/index'

function createInstance(): InyUtils {
  const instance = Object.create(null)

  extend(instance, is)
  extend(instance, url)
  extend(instance, date)
  extend(instance, verify)
  extend(instance, random)
  extend(instance, helper)
  extend(instance, env)

  return instance as InyUtils
}

/**
 * iny 工具库
 */
const inyUtils = createInstance()

export default inyUtils
