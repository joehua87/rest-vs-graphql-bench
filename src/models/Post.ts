import { Document, Model, Schema } from 'mongoose'

export interface PostDocument extends Document {
  _id: any
  title: string
  description: string
  body: string
  tags: string[]
}

const schema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    body: { type: String },
    tags: [{ type: String, required: true }],
  },
  {
    collection: 'Post',
    timestamps: true,
  },
)

export const createPostModel = (m: any): Model<PostDocument> =>
  m.model('Post', schema)
