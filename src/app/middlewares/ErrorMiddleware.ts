import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'
import { sysLog } from '../logger/SysLog'

/**
 * エラーミドルウェア
 */
@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: any, res: any, next: (err: any) => any) {
    if (!res.headersSent) {
      sysLog.error(req.path, req.session.user, error)
      res.send(error)
    }
  }
}
