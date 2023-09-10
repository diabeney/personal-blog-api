import express from "express";
import { BlogController } from "../controllers/PostController.js";
import { getPosts, validatePostRequestBody, getStaticFilePath } from "../middleware/index.js";
import { MarkdownController } from "../controllers/Markdown.js";

const { getAllPosts, getPostById, createNewPost, updatePost, deletePost } = BlogController;
const { getMarkdown } = MarkdownController;

const router = express.Router();

router.get("/posts", getPosts, getAllPosts);
// router.get("/posts/:id", getPosts, getPostById);
router.post("/posts", createNewPost);
// router.patch("/posts/:id", validatePostRequestBody, updatePost);
// router.delete("/posts/:id", getPosts, deletePost);
router.get("/posts/:slug", getStaticFilePath, getMarkdown);

export default router;
