import express from "express";
import { getPosts, validatePostRequestBody, BlogController } from "../controllers/PostController.js";

const { getAllPosts, getPostById, createNewPost, updatePost, deletePost } = BlogController;

const router = express.Router();

router.get("/posts", getPosts, getAllPosts);
router.get("/posts/:id", getPosts, getPostById);
router.post("/posts", createNewPost);
router.patch("/posts/:id", validatePostRequestBody, updatePost);
router.delete("/posts/:id", getPosts, deletePost);

export default router;
