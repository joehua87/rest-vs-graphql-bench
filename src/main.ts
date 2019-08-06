import express from 'express'

declare const module: any

async function bootstrap() {
  const app = express()
  app.set('view engine', 'pug')
  app.get('/', (req, res) => res.send('Hello World!'))

  const server = await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.close())
  }
}

bootstrap()
