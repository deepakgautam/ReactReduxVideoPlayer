import React from 'react';
//import Input from '';

const  Player = ({video}) =>  {
    if(! video ) {return ( <div></div>)}
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId; 
    return(
        <div className = "video-detail col-md-12">
          <div className = "embed-responsive embed-responsive-16by9">
           <iframe className = "embed-responsive-item" src = {url}></iframe>
          </div>
          <div>{video.snippet.title}</div>
        </div>
        )

}
export default Player;