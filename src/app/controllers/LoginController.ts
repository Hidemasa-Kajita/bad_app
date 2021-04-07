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

@Controller('/login')
export class LoginController {
  @Get('/')
  @Render('login/index')
  index(@Session() session: any) {
    return {
      title: 'Login',
      user: session.user,
    }
  }

  @Post('/')
  @UseBefore(LoginMiddleware)
  @Redirect('/home')
  async store(@Body() body: any, @Session() session: any, @Res() res: any) {
    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    const user: User | undefined  = await userRepository.createQueryBuilder()
      .where(`email = "${body.email}"`)
      .andWhere(`password = "${body.password}"`)
      .getOne()

    session.user = user
    if (user === undefined) {
      res.redirect('/login?is_error=true').end()
    }

    return {
      user: user,
    }
  }
}