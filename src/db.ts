import mongoose from 'mongoose'

import { createModels } from './models'

export async function initDb() {
  const connection = await mongoose.createConnection(
    'mongodb://localhost/bench',
    { useNewUrlParser: true },
  )
  const models = createModels(connection)
  return {
    connection,
    models,
  }
}
