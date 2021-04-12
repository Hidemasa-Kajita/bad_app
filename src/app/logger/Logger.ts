import log4js from 'log4js'
import { User } from '../../database/entities/User'
import { config } from './Config'

/**
 * ロガークラス
 * configで設定したcategories.defaultを使用可能
 */
export class Logger {
  public logger: log4js.Logger

  constructor() {
    log4js.configure(config)
    this.logger = log4js.getLogger()
  }

  /**
   * multifile出力の時のファイル名を作成
   */
  protected makeFileName(path: string): string {
    return path.slice(1).replace('/', '-')
  }

  /**
   * ログ出力フォーマット
   */
  private format(path: string, user: User|undefined, message: any) {
    const jsonUser = JSON.stringify(user)
    const jsonMessage = JSON.stringify(message)

    return `
    ============================================================================
    start:
      logging start...
    content:
      endpoint: ${path}
      user: ${jsonUser}
      message: ${jsonMessage}
    end:
      logging end...
    ============================================================================
    `
  }

  /**
   * infoレベルのログ出力
   */
  public info(path: string, user: User|undefined, info: any): void {
    this.logger.info(this.format(path, user, info))
  }

  /**
   * エラーレベルのログ出力 
   */
  public error(path: string, user: User|undefined, error: any): void {
    this.logger.error(this.format(path, user, error))
  }
}
