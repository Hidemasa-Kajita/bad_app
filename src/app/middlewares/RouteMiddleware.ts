import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers'
import { sysLog } from '../logger/SysLog'

/**
 * ルーティングミドルウェア
 */
@Middleware({ type: 'after' })
export class RouteMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any): void {
    if (!res.headersSent) {
      sysLog.info(req.path, 9999, 'Not found.')
      res.send(404)
    }

    return res
  }
}
