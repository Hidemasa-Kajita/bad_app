import { SessionData } from 'express-session'
import { SessionOptions } from 'node:http2'
import { Get, Session, Controller, Redirect } from 'routing-controllers'
import { session } from '../../types/session'

/**
 * トップコントローラー
 */
@Controller('/logout')
export class LogoutController {
  /**
   * トップ画面表示
   */
  @Get('/')
  @Redirect('/')
  logout(@Session() session: session) {
    session.user = undefined
    return {
      title: 'Top',
      user: session.user,
    }
  }
}
