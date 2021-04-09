import { ExpressMiddlewareInterface } from 'routing-controllers'
import { validate } from 'class-validator'
import { LoginUser } from '../validations/LoginUser'

/**
 * ログインミドルウェア
 */
export class LoginMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    let loginUser = new LoginUser(
      req.body.email,
      req.body.password
    )

    validate(loginUser).then(errors => {
      if (errors.length !== 0 ) {
        res.redirect('/login?is_error=true').end()
      }
    })

    next()
  }
}
