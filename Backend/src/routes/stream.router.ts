import express from 'express';
import { AuthenticationMiddleware } from '../middlewares/authentication.middleware';
import { allStreams, createStream, getStreamById } from '../controllers/stream.controller';

export const streamRouter = express.Router();


streamRouter.post('/create' , AuthenticationMiddleware , createStream)
streamRouter.get('/all' , AuthenticationMiddleware , allStreams)
streamRouter.get('/:streamId' , AuthenticationMiddleware , getStreamById)