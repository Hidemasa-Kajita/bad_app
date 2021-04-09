import { Get, Render, Session, Controller } from 'routing-controllers'

/**
 * トップコントローラー
 */
@Controller('/')
export class TopController {
  /**
   * トップ画面表示
   */
  @Get('/')
  @Render('top/index')
  getAll(@Session() session: any) {
    return {
      title: 'Top',
      user: session.user,
    }
  }
}
