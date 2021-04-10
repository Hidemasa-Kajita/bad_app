import { Get, Render, Session, Controller } from 'routing-controllers'
import { session } from '../../types/session'

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
  getAll(@Session() session: session) {
    return {
      title: 'Top',
      user: session.user,
    }
  }
}
