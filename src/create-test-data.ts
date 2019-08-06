import faker from 'faker'
import R from 'ramda'

import { initDb } from './db'

const posts = R.times(() => 0, 100).map(() => {
  const title = faker.lorem.sentence()
  const description = faker.lorem.paragraph()
  const body = faker.lorem.paragraphs(3)
  const tags = R.times(() => 0, 5).map(() => faker.lorem.words(3))
  return {
    title,
    description,
    body,
    tags,
  }
})

async function run() {
  const { connection, models } = await initDb()
  await models.Post.insertMany(posts)
  connection.close()
}

run()
  .then(() => console.log('Create test data successfully'))
  .catch(console.error)
