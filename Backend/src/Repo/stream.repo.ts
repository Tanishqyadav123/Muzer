import { prisma } from "../DB";
import { Stream } from "../generated/prisma";
import { addSongToStreamInterface, createStreamInterface, voteSongInterface } from "../interfaces/stream.interfaces";

export async function createNewStream(data: createStreamInterface) {
  return await prisma.stream.create({
    data: {
      streamName: data.streamName,
      hostId: data.userId,
    },
  });
}
export async function getAllStreams(): Promise<any> {
  return await prisma.stream.findMany({
    include: {
      host: true,
    },
  });
}
export async function getSingleStreamByIdWithSongs(
  streamId: string,
  userId : string
): Promise<any> {
  const streamData = await prisma.stream.findUnique({
    where: {
      id: streamId,
    },
    include: {
      host: true,
    },
  });

  let streamSongs = await prisma.streamSong.findMany({
    where: {
      streamId: streamId,
    },
  });

  // Fetch the song vote :-
 
  let songsWithVotes = await Promise.all(streamSongs.map(async (song : any) =>{
    
        const votes = await prisma.vote.findMany({
           where : {
             songId : song.id
           }
        })  
        let totalVotes = votes.length;
      
        
        if (votes.length) {
            votes.forEach((songVote) =>{

            

                  if (songVote.type === "DOWNVOTE") {
                      totalVotes -= 1 
                    }  
            })
        }
        
        return {...song , totalVotes , votes  }

  }))

  console.log("SongsWith Vote " , songsWithVotes)

  return { ...streamData, songs: songsWithVotes };
}


export async function addSongToStream (data : addSongToStreamInterface) {
   
     return await prisma.streamSong.create({
       data : {
         url : data.url,
         streamId : data.streamId,
         title : data.title,
         userId : data.userId
       }
     })
}


export async function getValidStream (streamId : string) {
  
     return await prisma.stream.findUnique({
       where : {
         id : streamId,
         active : true
       }
     })
     

}


// Function for upVote and downVote the songs by any user :-
export async function VoteSong (voteData : voteSongInterface) {
  
    return await prisma.vote.upsert({
       where : {
         userId_songId : {
           userId : voteData.userId,
           songId : voteData.songId
         }
       },
       update : {
         type : voteData.voteType
       },
       create : {
         type : voteData.voteType,
         songId : voteData.songId,
         userId : voteData.userId
       }
    })

}

export async function getAllSongsWithVotesOfStream (streamId : string) : Promise<any[]> {
   const allStreamSongs =  await  prisma.streamSong.findMany({
      where : {
         streamId
      },
      include : {
         votes : true
      }
   })

   let allSongsDetails: any[]  = []
   allStreamSongs.map((streamSong) =>{
   let totalVotes = streamSong.votes.length;
       streamSong.votes.map((voteDetails) =>{
           if (voteDetails.type === "DOWNVOTE") {
              totalVotes -= 1;
           }
         
       })

       allSongsDetails.push({...streamSong , totalVotes})
   })

   return allSongsDetails;


}

export async function fetchSongUpdatedWithVotes (songId : string) : Promise<any>{
  
   const songDetails = await prisma.streamSong.findUnique({
     where : {
         id : songId
     }
   })

   const allVotes = await prisma.vote.findMany({
     where : {
       songId
     }
   })

   let totalVotes = allVotes.length;

   allVotes.forEach((voteDetails) =>{
     if (voteDetails.type === "DOWNVOTE") {
       totalVotes -= 1;
     }
   })

   return {...songDetails , totalVotes , votes : allVotes}

} 