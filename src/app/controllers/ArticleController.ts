import 'reflect-metadata'
import {
  Get,
  Render,
  Session,
  UseBefore,
  Controller,
  QueryParams,
} from 'routing-controllers'
import { Repository, getConnectionManager, SelectQueryBuilder, } from 'typeorm'
import { Article } from '../../database/entities/Article'
import { AuthMiddleware } from '../middlewares/AuthMiddleware'
import { articleAndCount, searchArticle } from '../../types/atricle'
import { session } from '../../types/session'

/**
 * 記事コントローラー
 */
@Controller('/articles')
export class ArticleController {
  /**
   * 記事一覧画面表示
   */
  @Get('/')
  @UseBefore(AuthMiddleware)
  @Render('article/index')
  async index(@QueryParams() params: searchArticle, @Session() session: session) {
    const articleRepository: Repository<Article> = getConnectionManager().get().getRepository(Article)
    let query: SelectQueryBuilder<Article> = articleRepository.createQueryBuilder('articles')
      .leftJoinAndSelect('articles.user', 'user')

    // titleの絞り込み
    if (params.title !== undefined) {
      query.where(`title like "%${params.title}%"`)
    }

    const articles: articleAndCount = await query.getManyAndCount()

    return {
      title: 'Articles',
      count: articles[1],
      articles: articles[0],
      user: session.user,
      searchTitle: params.title,
    }
  }
}