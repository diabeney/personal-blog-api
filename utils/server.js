import express from "express";
import { config } from "dotenv";
import ConnectDB from "./db.js";

config();

const PORT = process.env.PORT || 3000;

const app = express();

ConnectDB(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});

export default app;
