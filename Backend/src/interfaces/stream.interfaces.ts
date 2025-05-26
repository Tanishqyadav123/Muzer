export interface createStreamInterface {
     streamName : string;
     userId  : string;
}

export interface addSongToStreamInterface {
     
     streamId : string,
     title : string,
     url : string,
     userId : string

}

export interface voteSongInterface {
     
     userId : string,
     songId : string,
     voteType : "UPVOTE" | "DOWNVOTE"


}