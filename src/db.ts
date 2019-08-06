import mongoose from 'mongoose'

import { createModels } from './models'

export const connection = mongoose.createConnection(
  'mongodb://localhost/bench',
  { useNewUrlParser: true },
)
export const models = createModels(connection)
