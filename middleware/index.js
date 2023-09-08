import { validateReqObj } from "../utils/utils.js";
import { Post } from "../models/post.js";
import { STATUS } from "../utils/utils.js";

async function getPosts(_, res, next) {
  try {
    const posts = await Post.find({});
    if (!posts) {
      res.status(404).json(STATUS.NOT_FOUND);
      return;
    }
    res.posts = posts;
    res.set("Access-Control-Allow-Origin", "*");
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

export { getPosts, validatePostRequestBody };
