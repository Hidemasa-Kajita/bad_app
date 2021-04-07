import { Get, Render, Session, Controller } from 'routing-controllers'

@Controller('/')
export class TopController {
  @Get('/')
  @Render('top/index')
  getAll(@Session() session: any) {
    return {
      title: 'Top',
      user: session.user
    }
  }
}
