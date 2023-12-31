import express from "express";
import { BlogController } from "../controllers/PostController.js";
import { getPosts, getStaticFilePath, getUser } from "../middleware/index.js";
import { MarkdownController } from "../controllers/Markdown.js";
import { UserController } from "../controllers/UserController.js";
import { validateUserRequestBody } from "../middleware/index.js";
import { validatePostRequestBody } from "../middleware/index.js";

const { getAllPosts, createNewPost, getPostById, updatePost } = BlogController;
const { getMarkdown } = MarkdownController;
const { registerUser, loginUser } = UserController;

const router = express.Router();

router.get("/posts", getPosts, getAllPosts);
router.post("/posts", createNewPost);
router.get("/posts/:slug", getStaticFilePath, getPostById, getMarkdown);
router.post("/register", validateUserRequestBody, registerUser);
router.post("/login", validateUserRequestBody, getUser, loginUser);
router.patch("/posts/:slug", validatePostRequestBody, updatePost);
router.get("/", (req, res) => {
  res.send("Hello World");
});

// router.get("/posts/:id", getPosts, getPostById);
// router.delete("/posts/:id", getPosts, deletePost);

export default router;
