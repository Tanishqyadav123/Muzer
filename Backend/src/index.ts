import express from "express";
import router from "./routes";
import * as dotenv from "dotenv";
import errorMiddleware from "./handlers/error.handler";
import cors from "cors";
dotenv.config({ path: ".env" });
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { prisma } from "./DB";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

const app = express();

// Creating a Socket Server using the express Server :-

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  console.log("Socket Connected SuccessFully ", socket.id);

    io.on("disconnect", () => {
      io.emit("disconnect-msg   ", socket.id);
    });
});
const PORT = process.env.PORT || 8080;

// Middleware for express :-
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring the Passport :-
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID!,
      clientSecret: process.env.OAUTH_CLIENT_SECRET!,
      callbackURL: `http://localhost:8080/api/v1/auth/google/callback`,
    },
    async (_, _a, profile, done) => {
      // Check in the DB is user with email already exist :-
      const email = profile?.emails?.[0]?.value;

      const isUserExist = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!isUserExist) {
        // Create the User in the table :-
        await prisma.user.create({
          data: {
            email: email!,
            firstName: profile.displayName.split(" ")[0],
            lastName: profile.displayName.split(" ")[1],
            role: "USER",
            isSubscribed: false,
          },
        });
      }

      return done(null, profile);
    }
  )
);

app.use(passport.initialize());

app.use("/api/v1", router);

// Using Error Middleware :-

app.use(errorMiddleware);

// Listening the Server on the PORT :-
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
