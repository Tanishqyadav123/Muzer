import { prisma } from "../DB";
import { createStreamInterface } from "../interfaces/stream.interfaces";

export async function createNewStream(data: createStreamInterface) : Promise<any> {
  await prisma.stream.create({
    data: {
      streamName: data.streamName,
      hostId: data.userId,
    },
  });
}
