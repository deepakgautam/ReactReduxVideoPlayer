import React from 'react';
import VideoListItem from '../containers/video_list_item.js';
import { connect } from 'react-redux';
//import Input from '';

export default class VideoList  extends React.Component {
  getVideos(){
    if (! this.props.videos ) return (<div>Loading-----</div>);
    const videolist =this.props.videos.items.map(video =>{
       return <VideoListItem
       video = {video} 
       />
    });
    return videolist;
  }
  
  render()  {
       return (
       <ul className="col-md-12 col-lg-12 list-group" style= {{float: 'right'}}>
        {this.getVideos()}
       </ul>
    )
  }
}