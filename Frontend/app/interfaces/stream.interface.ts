export interface addSongToStreamInterface { 

     streamId : string,
     title : string,
     url : string

}

export interface voteForSongInterface {

     streamId : string,
     songId : string,
     voteType : "UPVOTE" | "DOWNVOTE"

}
