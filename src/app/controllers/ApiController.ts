import 'reflect-metadata'
import {
  Get,
  JsonController,
} from 'routing-controllers'
import { User } from '../../database/entities/User'
import { Article } from '../../database/entities/Article'
import { Repository, getConnectionManager, } from 'typeorm'

@JsonController('/api')
export class ApiController {
    @Get('/test')
    test() {
        return {
          test: 'test'
        }
    }

    @Get('/users')
    getUsers() {
      const userRepository: Repository<User> = getConnectionManager().get().getRepository(User)
      return userRepository.find()
    }

    @Get('/articles')
    getArticles() {
      const articleRepository: Repository<Article> = getConnectionManager().get().getRepository(Article)
      return articleRepository.find()
    }
}
