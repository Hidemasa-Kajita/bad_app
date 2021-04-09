import { IsEmail, IsString } from 'class-validator'

/**
 * ユーザー登録のバリデーション定義
 */
export class RegisterUser {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}
