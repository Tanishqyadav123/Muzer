import axios from "axios";
import toast from "react-hot-toast";
import { addSongToStreamInterface, voteForSongInterface } from "../interfaces/stream.interface";
export const createStreamService = async ({
  streamName,
  socketId,
}: {
  streamName: string;
  socketId: string;
}): Promise<any> => {
  const token = localStorage.getItem("isAuthenticated");

  try {
    const res: any = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/create`,
      {
        streamName,
        socketId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data) {
      toast.success(res.data.message);
    }

    return true;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return false;
  }
};

export const getAllStreams = async (): Promise<any> => {
  const token = localStorage.getItem("isAuthenticated");

  try {
    const allStreamsResponse: any = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/all`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("is it calling ", allStreamsResponse);
    return allStreamsResponse.data.data;
  } catch (error: any) {
    console.log(error);
    toast.error(error?.response?.data?.message);
    return false;
  }
};

export const getStreamById = async (streamId: string): Promise<any> => {
  const token = localStorage.getItem("isAuthenticated");
  try {
    const streamDetailsResponse: any = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/${streamId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Stream Data ", streamDetailsResponse);
    return streamDetailsResponse.data.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return false;
  }
};


export const addSongToStream = async (data : addSongToStreamInterface) : Promise<any> =>{
  
     const token = localStorage.getItem("isAuthenticated");
  try {
    const {streamId , title , url} = data;
    const addedSong: any = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/add-song-to-stream`,
      {
          streamId,
          title,
          url
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Stream Data ", addedSong);
    return addedSong.data.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return false;
  }

}


export const voteForSong = async (data : voteForSongInterface) : Promise<any> => {
  
      const token = localStorage.getItem("isAuthenticated");
  try {
    const {streamId , songId , voteType} = data;
    const allSongsData : any = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/vote-song`,
      {
          streamId,
          songId,
          voteType
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("allSongsData ", allSongsData);
    return allSongsData.data.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return false;
  }

}