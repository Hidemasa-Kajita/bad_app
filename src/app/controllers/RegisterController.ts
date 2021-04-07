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

@Controller('/register')
export class RegisterController {
  @Get('/')
  @Render('register/index')
  async index(@Session() session: any) {
    return {
      title: 'Register',
      user: session.user,
    }
  }

  @Post('/')
  @UseBefore(RegisterMiddleware)
  @Redirect('/register/complete')
  async store(@Body() body: any, @Session() session: any) {
    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    await userRepository.createQueryBuilder()
      .insert()
      .into(User)
      .values(body)
      .execute()

    return {
      user: session.user,
    }
  }

  @Get('/complete')
  @Render('register/store')
  complete(@Session() session: any) {
    return {
      title: 'Complete',
      user: session.user,
    }
  }
}