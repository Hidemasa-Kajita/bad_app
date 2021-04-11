import log4js from 'log4js'
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
  private format(path: string, userId: number|undefined, message: any) {
    return `
    ============================================================================
    start:
      logging start...
    content:
      endpoint: ${path}
      userId: ${userId}
      message: ${message}
    end:
      logging end...
    ============================================================================
    `
  }

  /**
   * infoレベルのログ出力
   */
  public info(path: string, userId: number|undefined, info: any): void {
    this.logger.info(this.format(path, userId, info))
  }

  /**
   * エラーレベルのログ出力 
   */
  public error(path: string, userId: number|undefined, error: any): void {
    this.logger.error(this.format(path, userId, error))
  }
}
