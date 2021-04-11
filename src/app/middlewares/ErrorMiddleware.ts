import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'
import { appLog } from '../logger/AppLog'
import { sysLog } from '../logger/SysLog'

/**
 * エラーミドルウェア
 */
@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: any, res: any, next: (err: any) => any) {
    appLog.info(req.path, req.session.user.id, 'routing test.')

    if (!res.headersSent) {
      sysLog.info(req.path, req.session.user.id, error)
      res.send(error)
    }
  }
}
