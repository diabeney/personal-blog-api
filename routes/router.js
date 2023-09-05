import express from "express";
import { createNewPost, getAllPosts } from "../controllers/postController.js";
const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createNewPost);

export default router;
