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

  socket.on("some-add" , (data : {socketId : string , streamId : string} ) =>{
     const socket = io.sockets.sockets.get(data.socketId);
     socket?.join(data.streamId)

     console.log(`socket id ${data.socketId} is connected in stream id ${data.streamId}`)
  })
});

export { io, httpServer, app };
