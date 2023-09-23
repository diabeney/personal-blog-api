import express from "express";
import { config } from "dotenv";
import ConnectDB from "./db.js";

config();

let PORT = process.env.PORT || 3000;

const app = express();

// ConnectDB(process.env.MONGO_URI);

(async function startServer(port) {
  await ConnectDB("mongodb://127.0.0.1:27017");
  const server = app.listen(port);
  server.on("listening", async () => {
    console.info("Server listening on port:", port);
  });
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      const newPort = port + 1;
      console.warn(`Port ${port} already in use, trying ${newPort} instead.`);
      setTimeout(() => {
        PORT = process.env.PORT || newPort;
        startServer(newPort);
      }, 1000);
    }
  });
})(PORT);

export default app;
