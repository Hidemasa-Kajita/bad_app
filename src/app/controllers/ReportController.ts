import { Get, Render, Session, Controller } from 'routing-controllers'
import { session } from '../../types/session'

/**
 * レポートコントローラー
 */
@Controller('/report')
export class ReportController {
  /**
   * レポート画面表示
   */
  @Get('/')
  @Render('report/index')
  getAll(@Session() session: session) {
    return {
      title: 'Report',
      user: session.user,
    }
  }
}
