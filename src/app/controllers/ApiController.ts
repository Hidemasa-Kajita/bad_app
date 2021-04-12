import 'reflect-metadata'
import {
  Get,
  Session,
  JsonController,
} from 'routing-controllers'
import { User } from '../../database/entities/User'
import { Article } from '../../database/entities/Article'
import { Repository, getConnectionManager, } from 'typeorm'
import { appLog } from '../logger/AppLog'
import { session } from '../../types/session'

/**
 * Api のサンプル
 */
@JsonController('/api')
export class ApiController {

  /**
   * テスト
   */
  @Get('/test')
  test() {
      return {
        test: 'test'
      }
  }

  /**
   * ユーザー取得
   */
  @Get('/users')
  getUsers(@Session() session: session) {
    appLog.info('/api/users', session.user, 'call api.')

    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    return userRepository.find()
  }

  /**
   * 記事取得
   */
  @Get('/articles')
  getArticles(@Session() session: session) {
    appLog.info('/api/articles', session.user, 'call api.')

    const articleRepository: Repository<Article> = getConnectionManager().get().getRepository(Article)
    return articleRepository.find()
  }
}
