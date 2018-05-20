import React from 'react';
import VideoListItem from './video_list_item';
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

// function mapStateToProps(state) {
//     // Whatever is returned will show up as props
//     // inside of VideoList
//     return {
//       video: state.videos
//     };
//   }
  
  
//   // Promote VideoList  from a component to a container - it needs to know
//   // about this new dispatch method, selectBook. Make it available
//   // as a prop.
//   export default connect(mapStateToProps)(VideoList);