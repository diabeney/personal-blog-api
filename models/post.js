import { model, Schema } from "mongoose";

const PostSchema = new Schema({
  title: String,
  slug: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  tag: String,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Post = new model("Post", PostSchema);
