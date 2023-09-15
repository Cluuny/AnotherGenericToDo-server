import mongoose from "mongoose";
import { DB_URL } from "../config/env.config.js";

export const dbConnection = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Conexión exitosa");
    })
    .catch((err) => {
      console.error("ERROR en la conexión");
    });
};
