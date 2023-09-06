import { Post } from "../models/post.js";
import { validInput, STATUS, validateReqObj } from "../utils/utils.js";
const BlogController = {
  createNewPost: async (req, res) => {
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
      res.status(400).json({ ...STATUS.BAD_REQUEST, description: "One required field is missing or invalid" });
    }
  },

  getAllPosts: async (_, res) => {
    const posts = res.posts;
    posts && res.status(201).json({ results: posts });
  },
  updatePost: async (req, res) => {
    const { id } = req.params;
    const updatedPost = res.validatedBody;
    try {
      await Post.findByIdAndUpdate(id, { ...updatedPost, updatedAt: Date.now() }, { new: true });
      res.status(201).json(STATUS.CREATED);
    } catch (err) {
      res.status(404).json({ ...STATUS.NOT_FOUND, description: err.message });
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    const posts = res.posts;
    const actualPost = posts.find((item) => item.id === id);
    if (actualPost) {
      try {
        const result = await Post.deleteOne(actualPost);
        res.status(201).json({ ...STATUS.CREATED, message: "Deleted successfully" });
      } catch (err) {
        res.status(500).json(STATUS.SERVER_ERROR);
      }
    } else {
      res.status(404).json(STATUS.NOT_FOUND);
    }
  },
  getPostById: async (req, res) => {
    const { id } = req.params;
    const posts = res.posts;
    const actualPost = posts.find((item) => item.id === id);
    if (actualPost) {
      try {
        const result = await Post.findOne(actualPost);
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json(STATUS.SERVER_ERROR);
      }
    } else {
      res.status(404).json(STATUS.NOT_FOUND);
    }
  }
};

async function getPosts(_, res, next) {
  try {
    const posts = await Post.find({});
    if (!posts) {
      res.status(404).json(STATUS.NOT_FOUND);
      return;
    }
    res.posts = posts;
    next();
  } catch (err) {
    res.status(500).json(STATUS.SERVER_ERROR);
  }
}

function validatePostRequestBody(req, res, next) {
  const validatedObj = validateReqObj(req.body, ["title", "content", "tag", "author"]);
  if (validatedObj instanceof Error) {
    res.status(400).json(STATUS.BAD_REQUEST);
    return;
  }
  res.validatedBody = validatedObj;
  next();
}

export { BlogController, validatePostRequestBody, getPosts };
