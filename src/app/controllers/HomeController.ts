import {
  Get,
  Render,
  Session,
  UseBefore,
  Controller,
} from 'routing-controllers'
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
  getAll(@Session() session: any) {
    return {
      title: 'Home',
      user: session.user,
    }
  }
}