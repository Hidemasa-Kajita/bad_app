import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User'
import { convertTimestampToDateTime } from '../helpers/EntityHelper'

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column()
  user_id: number

  @Column({ length: 128 })
  title: string

  @Column({ length: 256 })
  contents: string

  @CreateDateColumn({ transformer: {
      from(v: Date): string { return convertTimestampToDateTime(v) },
      to (v: Date): Date { return v }
    }
  })
  created_at!: Date

  @UpdateDateColumn({ transformer: {
      from(v: Date): string { return convertTimestampToDateTime(v) },
      to (v: Date): Date { return v }
    }
  })
  updated_at!: Date

  constructor(
    user_id: number,
    title: string,
    contents: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.user_id = user_id
    this.title = title
    this.contents = contents
    this.created_at = created_at
    this.updated_at = updated_at   
  }

  @ManyToOne(type => User, user => user.articles)
  @JoinColumn({ name: 'user_id' })
  user?: User
}