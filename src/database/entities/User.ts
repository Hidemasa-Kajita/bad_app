import {
    Column,
    Entity,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from './Article'
import { convertTimestampToDateTime } from '../helpers/EntityHelper'
  
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column({ length: 128 })
  name: string

  @Column({ length: 256 })
  email: string

  @Column({ length: 32 })
  password: string

  @CreateDateColumn({ transformer: {
      from(v: Date): string { return convertTimestampToDateTime(v) },
      to (v: Date): Date { return v }
    }
  })
  created_at: Date

  @UpdateDateColumn({ transformer: {
      from(v: Date): string { return convertTimestampToDateTime(v) },
      to (v: Date): Date { return v }
    }
  })
  updated_at: Date

  constructor(
    name: string,
    email: string,
    password: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.name = name
    this.email = email
    this.password = password
    this.created_at = created_at
    this.updated_at = updated_at   
  }

  @OneToMany(type => Article, articles => articles.user)
  articles?: Article[]
}