import 'reflect-metadata'
import {
  Get,
  JsonController,
} from 'routing-controllers'
import { User } from '../../database/entities/User'
import { Article } from '../../database/entities/Article'
import { Repository, getConnectionManager, } from 'typeorm'

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
  getUsers() {
    const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
    return userRepository.find()
  }

  /**
   * 記事取得
   */
  @Get('/articles')
  getArticles() {
    const articleRepository: Repository<Article> = getConnectionManager().get().getRepository(Article)
    return articleRepository.find()
  }
}
