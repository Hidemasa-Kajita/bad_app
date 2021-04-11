import { Article } from '../database/entities/Article'

export type searchArticle = {
  title?: string, contents?: string
}

export type articleAndCount = [Article[], number]