import { ExpressMiddlewareInterface } from 'routing-controllers'

/**
 * 認証ミドルウェア
 */
export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    if (req.session.user === undefined) {
      res.redirect(301, '/login')
    }

    next()
  }
}
