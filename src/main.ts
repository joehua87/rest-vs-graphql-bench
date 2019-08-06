import express from 'express'

import { models } from './db'
import { apolloServer } from './graphql'

declare const module: any

async function bootstrap() {
  const app = express()
  app.set('view engine', 'pug')
  app.get('/', (req, res) => res.send('Hello World!'))
  app.get('/posts', async (_, res) => {
    const posts = await models.Post.find().lean()
    res.json(posts)
  })

  apolloServer.applyMiddleware({ app })
  const server = await app.listen(3000, () => {
    console.log(`Listen to 3000`)
  })

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.close())
  }
}

bootstrap()
