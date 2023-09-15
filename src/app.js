import express from "express";
import { dbConnection } from "./db/connect.db.js";

dbConnection();

const app = express();

app.get("/", (req, res) => {
  res.send("Helo World!");
});

export default app;
