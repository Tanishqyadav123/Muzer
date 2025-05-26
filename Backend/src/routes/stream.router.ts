import express from 'express';
import { AuthenticationMiddleware } from '../middlewares/authentication.middleware';
import { addSongToCurrentStream, allStreams, createStream, getStreamById, voteForSong } from '../controllers/stream.controller';

export const streamRouter = express.Router();


streamRouter.post('/create' , AuthenticationMiddleware , createStream)
streamRouter.get('/all' , AuthenticationMiddleware , allStreams)
streamRouter.get('/:streamId' , AuthenticationMiddleware , getStreamById)
streamRouter.post('/add-song-to-stream' , AuthenticationMiddleware , addSongToCurrentStream)
streamRouter.post('/vote-song' , AuthenticationMiddleware , voteForSong)