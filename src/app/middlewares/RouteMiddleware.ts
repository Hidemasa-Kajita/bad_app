import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers'
import { appLog } from '../logger/AppLog'
import { sysLog } from '../logger/SysLog'

/**
 * ルーティングミドルウェア
 */
@Middleware({ type: 'after' })
export class RouteMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    if (!res.headersSent) {
      sysLog.info(req.path, req.session.user, 'Not found.')
      res.send(404)
    }

    appLog.info(req.path, req.session.user, 'routing info.')

    return res
  }
}
