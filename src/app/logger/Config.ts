import path from 'path'
import { DateTime } from 'luxon'

const rootDir = path.join(__dirname, '../')
const today = DateTime.utc().toFormat('yyyy-MM-dd')

/**
 * ログ出力設定
 */
export const config = {
  appenders: {
    consoleLog: {
      type: 'console',
    },
    systemLog: {
      type: 'file',
      filename: path.join(rootDir, `./logs/${today}/system/system.log`),
      maxLogSize: 5000000,
      backups: 5,
      compress: true,
    },
    applicationLog: {
      type: 'multiFile',
      base: path.join(rootDir, `./logs/${today}/application/`),
      property: 'endpoint',
      extension: '.log',
      maxLogSize: 5000000,
      backups: 5,
      compress: true,
    },
  },
  categories: {
    default: {
      appenders: ['consoleLog'],
      level: 'ALL',
    },
    system: {
      appenders: ['systemLog'],
      level: 'ALL',
    },
    application: {
      appenders: ['applicationLog'],
      level: 'ALL',
    },
  },
}
