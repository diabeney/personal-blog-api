import express from "express";
import { config } from "dotenv";
import ConnectDB from "./db.js";

config();

const PORT = process.env.PORT || 3000;

const app = express();

ConnectDB(process.env.MONGO_URI);
// ConnectDB("mongodb://127.0.0.1:27017");

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
