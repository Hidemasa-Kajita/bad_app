import { ExpressMiddlewareInterface } from 'routing-controllers'
import { validateSync } from 'class-validator'
import { RegisterUser } from '../validations/RegisterUser'

/**
 * ユーザー登録ミドルウェア
 */
export class RegisterMiddleware implements ExpressMiddlewareInterface {
  async use(req: any, res: any, next: (err?: any) => any): Promise<void> {
    let registerUser: RegisterUser = new RegisterUser(
      req.body.name,
      req.body.email,
      req.body.password,
    )

    const errors = validateSync(registerUser)
    if (errors.length !== 0 ) {
      res.redirecte('/register?is_error=true')
      return res
    }

    next()
  }
}
