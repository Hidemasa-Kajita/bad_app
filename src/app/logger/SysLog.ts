import { Logger } from './Logger'
import log4js from 'log4js'

/**
 * システムログ出力クラス
 */
class SysLog extends Logger {
  constructor() {
    super()
    this.logger = log4js.getLogger('system')
  }
}

// グローバル変数にする
export const sysLog = new SysLog
