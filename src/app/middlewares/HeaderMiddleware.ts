import { Middleware, ExpressMiddlewareInterface } from "routing-controllers"

/**
 * レスポンスヘッダーを設定するミドルウェア
 */
@Middleware({ type: 'after' })
export class HeaderMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    res.setHeader('Cache-Control', 'no-store')

    next()
  }
}
