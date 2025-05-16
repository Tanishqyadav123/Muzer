import express from "express";
import router from "./routes";
import * as dotenv from "dotenv";
import errorMiddleware from "./handlers/error.handler";
// import './types/global'
dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for express :-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

// Using Error Middleware :-

app.use(errorMiddleware);

// Listening the Server on the PORT :-
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
