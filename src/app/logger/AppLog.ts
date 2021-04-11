import log4js from 'log4js'
import { Logger } from './Logger'

/**
 * アプリケーションログ出力クラス
 * - multifile対応
 */
class AppLog extends Logger {
  constructor() {
    super()
    this.logger = log4js.getLogger('application')
  }

  /**
   * infoレベルのログ出力
   */
  public info(path: string, userId: number|undefined, info: any) {
    this.logger.addContext('endpoint', this.makeFileName(path))
    super.info(path, userId, info)
  }

  /**
   * errorレベルのログ出力
   */
  public error(path: string, userId: number|undefined, error: any) {
    this.logger.addContext('endpoint', this.makeFileName(path))
    super.error(path, userId, error)
  }
}

export const appLog = new AppLog
