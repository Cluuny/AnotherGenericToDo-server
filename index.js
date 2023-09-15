import { PORT } from "./src/config/env.config.js";
import app from "./src/app.js";

app.listen(PORT, (err) => {
  if (err) console.error("ERROR ->" + err.name);
  console.log("SERVER ON");
});
