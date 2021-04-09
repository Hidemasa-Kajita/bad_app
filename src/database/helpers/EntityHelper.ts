import { DateTime } from 'luxon'

/**
 * エンティティに使用するヘルパー関数
 */

/*************************************
 * mysqlのtimestampから日付に変更する
 * ex)
 * 変換前：2021-01-31T03:46:50.000Z
 * 変換後：2021-01-31 12:46:50
 *************************************/
export function convertTimestampToDateTime (v: Date): string {
  return DateTime.fromJSDate(v).toFormat('yyyy-MM-dd HH:m:ss')
}
