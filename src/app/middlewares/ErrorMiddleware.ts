import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'

/**
 * エラーミドルウェア
 */
@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: any, res: any, next: (err: any) => any) {
    if (!res.headersSent) {
      res.send(error)
    }
  }
}
