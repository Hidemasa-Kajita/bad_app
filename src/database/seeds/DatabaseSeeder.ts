import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from '../entities/User'
import { Article } from '../entities/Article'

/**
 * シーダー実行クラス
 * insert中のテーブルをターミナルに出力する
 */
export default class DatabaseSeeder implements Seeder {
  public async run (factory: Factory, connection: Connection): Promise<any> {
    /**
     * ユーザー作成
     * ユーザーIDを他のファクトリーに使用する
    */
    console.log(':inserting users.')
    const users: User[] = await factory(User)().createMany(10)

    const userIds = users.map((user: User) => {
      return user.id
    }) as number[]

    /**
     * 記事作成
    */
    console.log(':inserting articles.')
    const articles: Article[] = await factory(Article)(userIds).createMany(20)

    console.log(':complete articles.')
  }
}
