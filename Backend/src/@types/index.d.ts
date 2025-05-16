import type { Request } from 'express';
import { DecodedUserType } from '../entity/decodedUser';

declare global {
  namespace Express {
    interface Request {
      user?: DecodedUserType;
    }
  }
}
