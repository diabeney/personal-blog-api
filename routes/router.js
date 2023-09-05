import express from "express";
import { createNewPost, getAllPosts, updatePost } from "../controllers/PostController.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createNewPost);
router.patch("/posts/:id", updatePost);

export default router;
