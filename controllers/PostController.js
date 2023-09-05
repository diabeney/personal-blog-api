import { Post } from "../models/post.js";
import { validInput, STATUS } from "../utils/utils.js";

async function createNewPost(req, res) {
  const { title, content, author, tag } = req.body;
  const isValid = [title, content, author, tag].every((item) => validInput(item));
  if (isValid) {
    try {
      const newPost = new Post({
        title: title,
        content: content,
        author: author,
        tag: tag
      });
      await newPost.save();
      res.status(STATUS.CREATED.code).json(STATUS.CREATED);
    } catch (err) {
      res.status(STATUS.SERVER_ERROR.code).json(STATUS.SERVER_ERROR);
    }
  } else {
    res.status(400).json({ ...STATUS.BAD_REQUEST, description: "One required field is missing" });
  }
}

async function getAllPosts(_, res) {
  try {
    const posts = await Post.find({});
    if (!posts) {
      res.status(404).json(STATUS.NOT_FOUND);
    }
    res.status(201).json({ results: posts });
  } catch (err) {
    res.status(500).json(STATUS.SERVER_ERROR);
  }
}

async function updatePost(req, res) {
  const { id } = req.params;
  try {
    const updated = await Post.findByIdAndUpdate(id, { ...req.body, updatedAt: Date.now() }, { new: true });
    if (!updated) {
      res.status(404).json(STATUS.NOT_FOUND);
      return;
    }
    res.status(201).json(STATUS.CREATED);
  } catch (err) {
    res.status(500).json({ ...STATUS.SERVER_ERROR, description: err.message });
  }
}

export { createNewPost, getAllPosts, updatePost };
