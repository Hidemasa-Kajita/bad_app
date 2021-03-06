import 'reflect-metadata'
import path from 'path'
import express from 'express'
import session from 'express-session'
import { useExpressServer } from 'routing-controllers'
import { getConnectionManager, createConnection } from 'typeorm'
import { TopController } from './app/controllers/TopController'
import { HomeController } from './app/controllers/HomeController'
import { RegisterController } from './app/controllers/RegisterController'
import { LoginController } from './app/controllers/LoginController'
import { LogoutController } from './app/controllers/LogoutController'
import { ArticleController } from './app/controllers/ArticleController'
import { ReportController } from './app/controllers/ReportController'
import { ApiController } from './app/controllers/ApiController'
import { RouteMiddleware } from './app/middlewares/RouteMiddleware'
import { ErrorMiddleware } from './app/middlewares/ErrorMiddleware'
import { HeaderMiddleware } from './app/middlewares/HeaderMiddleware'

const app = express()

app.use(express.static(path.join(__dirname, './resources')))
app.set('js', path.join(__dirname, './resources/js'))
app.set('views', path.join(__dirname, './resources/views'))
app.set('view engine', 'pug')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(session({
  secret: 'keyboard cat',
  cookie: { secure: false, httpOnly: false },
  resave: true,
  saveUninitialized: true,
}))

useExpressServer(app, {
  controllers: [
    HomeController,
    TopController,
    RegisterController,
    LoginController,
    LogoutController,
    ArticleController,
    ApiController,
    ReportController,
  ],
  middlewares: [
    HeaderMiddleware,
    RouteMiddleware,
    ErrorMiddleware,
  ]
})

const connectionMng = getConnectionManager()
if((connectionMng.connections.length === 0)) {
  createConnection()
} else {
  connectionMng.connections.forEach(async element => {
    if(!element.isConnected) {
      createConnection()
    } else {
      await element.close()
      createConnection()
    }
  })
}

app.listen(3030)