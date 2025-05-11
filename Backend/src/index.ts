import express from "express";
import router from "./routes/index";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();

app.use("/api/v1", router);

// Listening the Server on the PORT :-
app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
