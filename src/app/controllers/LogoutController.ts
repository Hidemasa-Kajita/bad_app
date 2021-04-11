import { SessionData } from 'express-session'
import { SessionOptions } from 'node:http2'
import { Get, Session, Controller, Redirect } from 'routing-controllers'
import { session } from '../../types/session'

/**
 * ログアウトコントローラー
 */
@Controller('/logout')
export class LogoutController {
  /**
   * ログアウト処理
   */
  @Get('/')
  @Redirect('/login')
  logout(@Session() session: session) {
    session.user = undefined
    return {
      title: 'Login',
      user: session.user,
    }
  }
}
