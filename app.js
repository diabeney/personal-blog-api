import express from "express";
import cors from "cors";
import { CorsOptions } from "./configs/corsOptions.js";
import app from "./utils/server.js";
import router from "./routes/router.js";

app.use(express.json());
app.use(cors(CorsOptions));
app.use("/", router);
