import { ExpressMiddlewareInterface } from 'routing-controllers';

export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    if (req.session.user === undefined) {
      res.redirect(301, '/login').end()
    }

    next()
  }
}
