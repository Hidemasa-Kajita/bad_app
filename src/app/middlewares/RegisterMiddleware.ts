import { ExpressMiddlewareInterface } from 'routing-controllers'
import { validate } from 'class-validator'
import { RegisterUser } from '../validations/RegisterUser'

export class RegisterMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    let registerUser = new RegisterUser(
      req.body.name,
      req.body.email,
      req.body.password,
    )

    validate(registerUser).then(errors => {
      if (errors.length !== 0) {
        res.redirecte('/register?is_error=true').end()
      }
    })

    next()
  }
}
