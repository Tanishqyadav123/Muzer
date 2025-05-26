"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { RiThumbUpLine , RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine , RiThumbDownFill } from "react-icons/ri";
import { voteForSong } from '../service/stream.service';
import { socket } from '../socket';
function NextSong({songDetails , index , allSongs , setAllSongs , streamId , userId} : { index : number , allSongs : any[] ,  setAllSongs : Dispatch<SetStateAction<any[]>> , songDetails : any , streamId: string , userId : string}) {

  const [song , setSong] = useState<any>(songDetails);
  const [userVote, setUserVote] = useState<"UPVOTE" | "DOWNVOTE" | null>(null);

  // Call for an API for UPVOTE and DOWNVote and song :-
  
useEffect(() => {

  console.log("22222222222222222222" , userId)
  console.log("song" , song )
  const userVoteType = song?.votes?.find((vote : any) => vote.userId === userId ? vote : null)
  setUserVote(userVoteType?.type);
   console.log("inSide UseEffect" , userVoteType?.type)

}, [song, userId]);



const handleUpVote = async (songId: string) => {

  console.log("userVoteType" , userVote)
  if (userVote && userVote == "UPVOTE") {
      return;
  }

  await voteForSong({songId , streamId , voteType : "UPVOTE"})

  // const sortedSongs = [...updateVotesOfSongs].sort((a, b) => b.totalVote - a.totalVote);
  // setAllSongs(sortedSongs);  
};

const handleDownVote = async (songId: string) => {
  if (userVote && userVote == "DOWNVOTE") {
      return;
  }

    await voteForSong({songId , streamId , voteType : "DOWNVOTE"})
    //  console.log("Updaveted Votes " , updateVotesOfSongs) 
  // const sortedSongs = [...updateVotesOfSongs].sort((a, b) => b.totalVote - a.totalVote);
  // setAllSongs(sortedSongs);
};



// console.log("SOng total Vote " , song.totalVotes , songDetails)

// useEffect(() =>{
  
  
 
//     // console.log("Inside voted-for-song")
//      // Updated the songs details :-

     
//     //  let updateVotesOfSongs = allSongs.filter((song) =>{
        
        
//     //         if (song.id === songDetails.id) {
//     //               setSong(songDetails)
//     //             // console.log("Filtered SOng" , songDetails)
                
//     //         }
//     //         else {
//     //           return {...song}
//     //         }

//     //  }) 

//     //  updateVotesOfSongs.push(songDetails)
//     //  const sortedSongs = [...updateVotesOfSongs].sort((a, b) => b.totalVotes - a.totalVotes);
//     // //  console.log("All Sorted " , sortedSongs)
//     //  setAllSongs((prev) => [...sortedSongs]);


//         setAllSongs(prevSongs => {
//       const updatedList = prevSongs.map(song =>
//         song.id === updatedSong.id ? { ...updatedSong } : song
//       );
//       const sortedSongs = [...updatedList].sort((a, b) => b.totalVotes - a.totalVotes);
//       return sortedSongs;
//     });

//     setSong(updatedSong); // Update current song view

//  socket.on("voted-for-song", handleVoteUpdate);

//   return () => {
//     socket.off("voted-for-song", handleVoteUpdate); // cleanup
//   };

// } , [allSongs , song])



// console.log("line 60 song details " , song)
console.log("My latest updated Song" , allSongs)
  return (
    <div className='w-full min-h-[10vh] my-4 bg-[#374152] rounded-md p-3'>
       <div className='flex items-center justify-between'>
          <div className='song-details flex items-center gap-3'>
             <p className='numbering text-gray-500'>#{index+1}</p>
           <div className='song-title flex items-start flex-col gap-2'>
               <h2 className='text-sm'>{song.title}</h2>
             
           </div>
          </div>


           <div className='voting flex items-center gap-4'>
               {
                 userVote === "UPVOTE" ? <RiThumbUpFill className='cursor-pointer' /> : <RiThumbUpLine className='cursor-pointer' onClick={() => handleUpVote(songDetails.id)} />
               }
               {song.totalVotes}
              {
                 userVote === "DOWNVOTE" ? <RiThumbDownFill className='cursor-pointer' /> : <RiThumbDownLine className='cursor-pointer' onClick={() => handleDownVote(songDetails.id)}/>
              }
           </div>
       </div>
    </div>
  )
}

export default NextSong
