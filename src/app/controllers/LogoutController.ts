import { Get, Session, Controller, Redirect } from 'routing-controllers'
import { session } from '../../types/session'
import { appLog } from '../logger/AppLog'

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
    appLog.info('/logout', session.user, 'logout.')

    session.user = undefined
    return {
      title: 'Login',
      user: session.user,
    }
  }
}
