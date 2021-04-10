import { Middleware, ExpressMiddlewareInterface } from "routing-controllers"

/**
 * ルーティングミドルウェア
 */
@Middleware({ type: 'after' })
export class RouteMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    if (!res.headersSent) {
      res.send(404)
    }

    next()
  }
}
