import {
  Res,
  Get,
  Post,
  Body,
  Render,
  Session,
  Redirect,
  Controller,
  UseBefore,
} from 'routing-controllers'
import { User } from '../../database/entities/User'
import { Repository, getConnectionManager } from 'typeorm'
import { LoginMiddleware } from '../middlewares/LoginMiddleware'
import { session } from '../../types/session'
import { loginUser } from '../../types/user'

/**
 * ログインコントローラー
 */
@Controller('/login')
export class LoginController {
  /**
   * ログイン画面表示
   */
  @Get('/')
  @Render('login/index')
  index(@Session() session: session) {
    return {
      title: 'Login',
      user: session.user,
    }
  }

  /**
   * ログイン判定処理
   */
  @Post('/')
  @UseBefore(LoginMiddleware)
  @Redirect('/home')
  async store(@Body() body: loginUser, @Session() session: session, @Res() res: any) {
    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    const user: User | undefined  = await userRepository.createQueryBuilder()
      .where(`email = "${body.email}"`)
      .andWhere(`password = "${body.password}"`)
      .getOne()

    session.user = user
    if (user === undefined) {
      res.redirect('/login?is_error=true')
      return res
    }

    return {
      user: user,
    }
  }
}