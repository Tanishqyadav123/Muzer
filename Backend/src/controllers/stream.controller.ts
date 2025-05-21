import { NextFunction, Request, Response } from "express";
import { createStreamSchema } from "../schemaValidation/stream.schema";
import { formatError } from "../utils/formaterror";
import { ErrorHandler } from "../middlewares/error.middleware";
import { createNewStream } from "../Repo/stream.repo";
import { io } from "../config/socket";


async function createStream(req: Request, res: Response, next: NextFunction) {
  try {
    const parseResponse = createStreamSchema.safeParse(req.body);

    const { userId } = req.user!;
    if (!parseResponse.success) {
      const errors = formatError(parseResponse.error.errors);

      return next(new ErrorHandler(errors.join(" , "), 400));
    }

    const { streamName } = parseResponse.data;

    const newStream = await createNewStream({ streamName, userId });

    // Attach the User ID to this stream RoomId :-
   


  } catch (error) {
    throw error;
  }
}

export { createStream };
