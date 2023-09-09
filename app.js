import express from "express";
import cors from "cors";
import { CorsOptions } from "./configs/corsOptions.js";
import app from "./utils/server.js";
import router from "./routes/router.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static("public/blog"));
app.use(express.json());
app.use(cors(CorsOptions));
app.use("/", router);
