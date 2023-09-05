import { Post } from "../models/post.js";
import { validInput } from "../utils/utils.js";

async function createNewPost(req, res) {
  const { title, content, author, tag } = req.body;
  const isValidData = [title, content, author, tag].every((value) =>
    validInput(value)
  );
  if (isValidData) {
    try {
      const newPost = new Post({
        title: title,
        content: content,
        author: author,
        tag: tag,
      });
      await newPost.save();
      res.status(201).json({ message: "Post created successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server error" });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({});
    if (!posts) {
      res.status(404).json({ message: "Resource Not Found" });
    }
    res.status(201).json({ results: posts });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}

export { createNewPost, getAllPosts };
