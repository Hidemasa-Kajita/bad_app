import { validateSync, validate, ValidationError } from 'class-validator'
import { ExpressMiddlewareInterface } from 'routing-controllers'
import { LoginUser } from '../validations/LoginUser'

/**
 * ログインミドルウェア
 */
export class LoginMiddleware implements ExpressMiddlewareInterface {
  async use(req: any, res: any, next: (err?: any) => any): Promise<void> {
    let loginUser: LoginUser = new LoginUser(
      req.body.email,
      req.body.password
    )

    const errors = validateSync(loginUser)
    if (errors.length !== 0 ) {
      res.redirect('/login?is_error=true')
      return res
    }

    next()
  }
}
