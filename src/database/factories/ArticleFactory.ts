import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Article } from '../entities/Article'

/**
 * articlesテーブルのダミーレコード定義
 */
define(Article, (faker: typeof Faker, userIds: any) => {
  return new Article(
    userIds[Math.floor(Math.random() * userIds.length)],
    faker.name.title(),
    faker.lorem.word(),
    '2021-05-05 05:05:05' as any,
    '2021-05-05 05:05:05' as any,
  )
})