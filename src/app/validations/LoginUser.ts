import { IsEmail, IsString } from 'class-validator'

/**
 * ログインユーザーのバリデーション定義
 */
export class LoginUser {
  @IsEmail()
  email: string

  @IsString()
  password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}
