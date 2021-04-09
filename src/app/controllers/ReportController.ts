import { Get, Render, Session, Controller } from 'routing-controllers'

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
  getAll(@Session() session: any) {
    return {
      title: 'Report',
      user: session.user,
    }
  }
}
