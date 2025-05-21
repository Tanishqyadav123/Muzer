import { Server, Socket } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("Socket Connected Successfully ", socket.id);

  //   io.emit("join-stream", { userId: socket.id });

  //   socket.on("create-stream", (data) => {
  //     console.log("Stream Created successfully ", data);
  //   });
});

export { io, httpServer, app };
