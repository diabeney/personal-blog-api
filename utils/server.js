import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
config();

let PORT = process.env.PORT || 8080;

const app = express();

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected!");
} catch (err) {
  console.log(err);
}

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});

export default app;
