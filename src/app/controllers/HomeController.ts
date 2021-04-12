import {
  Get,
  Render,
  Session,
  UseBefore,
  Controller,
} from 'routing-controllers'
import { session } from '../../types/session'
import { appLog } from '../logger/AppLog'
import { AuthMiddleware } from '../middlewares/AuthMiddleware'

/**
 * homeコントローラー
 */
@Controller('/home')
export class HomeController {
  /**
   * home画面表示
   */
  @Get('/')
  @UseBefore(AuthMiddleware)
  @Render('home')
  index(@Session() session: session) {
    appLog.info('/home', session.user, 'login.')

    return {
      title: 'Home',
      user: session.user,
    }
  }
}