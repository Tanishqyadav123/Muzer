import { prisma } from "../DB";
import { Stream } from "../generated/prisma";
import { createStreamInterface } from "../interfaces/stream.interfaces";

export async function createNewStream(data: createStreamInterface) {
  return await prisma.stream.create({
    data: {
      streamName: data.streamName,
      hostId: data.userId,
    },
  });
}
export async function getAllStreams() : Promise<any> {
  return await prisma.stream.findMany({
     include : {
       host : true
     }
  });
}
export async function getSingleStreamById(streamId : string) : Promise<any> {
  return await prisma.stream.findUnique({
     where : {
       id : streamId
     }
  });
}
