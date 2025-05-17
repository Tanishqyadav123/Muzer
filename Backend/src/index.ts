import express from "express";
import router from "./routes";
import * as dotenv from "dotenv";
import errorMiddleware from "./handlers/error.handler";
import  cors from 'cors' 
dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for express :-
app.use(cors({
  origin : "*",
  methods : ["GET" , "POST" , "PATCH" , "PUT" , "DELETE"]
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

// Using Error Middleware :-

app.use(errorMiddleware);

// Listening the Server on the PORT :-
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
