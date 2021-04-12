import {
  Get,
  Body,
  Post,
  Render,
  Session,
  Redirect,
  UseBefore,
  Controller,
} from 'routing-controllers'
import { User } from '../../database/entities/User'
import { Repository, getConnectionManager } from 'typeorm'
import { RegisterMiddleware } from '../middlewares/RegisterMiddleware'
import { session } from '../../types/session'
import { registerUser } from '../../types/user'
import { appLog } from '../logger/AppLog'

/**
 * ユーザー登録コントローラー
 */
@Controller('/register')
export class RegisterController {
  /**
   * 登録画面表示
   */
  @Get('/')
  @Render('register/index')
  async index(@Session() session: any) {
    return {
      title: 'Register',
      user: session.user,
    }
  }

  /**
   * 登録処理
   */
  @Post('/')
  @UseBefore(RegisterMiddleware)
  @Redirect('/register/complete')
  async store(@Body() body: registerUser, @Session() session: session) {
    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    await userRepository.createQueryBuilder()
      .insert()
      .into(User)
      .values(body)
      .execute()

    appLog.info('/register', session.user, body)

    return {
      user: session.user,
    }
  }

  @Get('/complete')
  @Render('register/store')
  complete(@Session() session: session) {
    return {
      title: 'Complete',
      user: session.user,
    }
  }
}