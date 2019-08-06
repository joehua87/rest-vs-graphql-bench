import { Connection, Model } from 'mongoose'

import * as Post from './Post'

interface Models {
  Post: Model<Post.PostDocument>
}

const createModels = (m: any) => ({
  Post: Post.createPostModel(m),
})

export interface IDb {
  connection: Connection
  models: Models
}

export { createModels, Models }
