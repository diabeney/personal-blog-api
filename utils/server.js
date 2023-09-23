import express from "express";
import { config } from "dotenv";
import ConnectDB from "./db.js";

config();

let PORT = process.env.PORT || 3000;

const app = express();

// ;

(async function startServer(port) {
  await ConnectDB(process.env.MONGO_URI);
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
