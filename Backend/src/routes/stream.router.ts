import express from 'express';
import { AuthenticationMiddleware } from '../middlewares/authentication.middleware';
import { createStream } from '../controllers/stream.controller';

export const streamRouter = express.Router();


streamRouter.post('/create' , AuthenticationMiddleware , createStream)