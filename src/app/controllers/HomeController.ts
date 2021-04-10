import {
  Get,
  Render,
  Session,
  UseBefore,
  Controller,
} from 'routing-controllers'
import { session } from '../../types/session'
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
  getAll(@Session() session: session) {
    return {
      title: 'Home',
      user: session.user,
    }
  }
}