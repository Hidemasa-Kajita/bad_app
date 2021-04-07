import {
  Get,
  Render,
  Session,
  UseBefore,
  Controller,
} from 'routing-controllers'
import { AuthMiddleware } from '../middlewares/AuthMiddleware'

@Controller('/home')
export class HomeController {
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