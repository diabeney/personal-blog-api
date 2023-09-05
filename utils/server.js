import express from "express";
import { config } from "dotenv";
import ConnectDB from "./db.js";

config();

const PORT = process.env.PORT || 3000;

const app = express();

ConnectDB("mongodb://127.0.0.1:27017/blog");

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});

export default app;
