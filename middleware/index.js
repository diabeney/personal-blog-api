import { validateReqObj } from "../utils/utils.js";
import { Post } from "../models/post.js";
import { User } from "../models/User.js";
import { STATUS } from "../utils/utils.js";
import { join } from "path";
import { readdirSync } from "fs";

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
async function getUser(_, res, next) {
  const { email } = res.validatedBody;
  try {
    const user = await User.find({ email });
    if (!user) {
      res.status(404).json(STATUS.NOT_FOUND);
      return;
    }
    res.user = user;
    next();
  } catch (err) {
    res.status(500).json(STATUS.SERVER_ERROR);
  }
}

function validatePostRequestBody(req, res, next) {
  const validatedObj = validateReqObj(req.body, ["title", "slug", "tag", "author"]);
  if (validatedObj instanceof Error) {
    res.status(400).json(STATUS.BAD_REQUEST);
    return;
  }
  res.validatedBody = validatedObj;
  next();
}
function validateUserRequestBody(req, res, next) {
  const validatedObj = validateReqObj(req.body, ["name", "email", "password"]);
  if (validatedObj instanceof Error) {
    res.status(400).json(STATUS.BAD_REQUEST);
    return;
  }
  res.validatedBody = validatedObj;
  next();
}

function getStaticFilePath(req, res, next) {
  const { slug } = req.params;
  const markdownDir = join(process.cwd(), "/public/blog");
  let match;
  try {
    const files = readdirSync(markdownDir);
    for (const file of files) {
      const filePath = join(markdownDir, file);
      const isMatch = file === `${slug}.md`;
      if (isMatch) {
        match = filePath;
        break;
      }
    }
    if (!match) {
      res.status(404).json(STATUS.NOT_FOUND);
      return;
    }
    res.blogPath = match;
    next();
  } catch (err) {
    res.status(500).json(STATUS.SERVER_ERROR);
  }
}

export { getPosts, validatePostRequestBody, getStaticFilePath, validateUserRequestBody, getUser };
