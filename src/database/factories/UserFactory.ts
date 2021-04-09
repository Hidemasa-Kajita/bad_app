import Faker from 'faker'
import { User } from '../entities/User'
import { define } from 'typeorm-seeding'

/**
 * usersテーブルのダミーレコード定義
 */
define(User, (faker: typeof Faker) => {
  return new User(
    faker.name.firstName() + ' ' + faker.name.lastName(),
    faker.internet.email(),
    'p@ssw0rd',
    '2021-05-05 05:05:05' as any,
    '2021-05-05 05:05:05' as any,
  )
})