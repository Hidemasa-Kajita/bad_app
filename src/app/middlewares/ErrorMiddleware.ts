import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'

/***************************************************************************
 *　意図しないエラーが発生した場合、500エラーとしてレスポンスを返却するミドルウェア
 **************************************************************************/
@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: any, res: any, next: (err: any) => any) {
    if (!res.headersSent) {
      res.send(500)
    }

    res.end()
  }
}
