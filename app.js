import express from "express";

import app from "./utils/server.js";
import router from "./routes/router.js";

app.use(express.json());
app.use("/", router);
