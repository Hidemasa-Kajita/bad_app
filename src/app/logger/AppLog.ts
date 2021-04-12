import log4js from 'log4js'
import { User } from '../../database/entities/User'
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
  public info(path: string, user: User|undefined, info: any) {
    this.logger.addContext('endpoint', this.makeFileName(path))
    super.info(path, user, info)
  }

  /**
   * errorレベルのログ出力
   */
  public error(path: string, user: User|undefined, error: any) {
    this.logger.addContext('endpoint', this.makeFileName(path))
    super.error(path, user, error)
  }
}

export const appLog = new AppLog
