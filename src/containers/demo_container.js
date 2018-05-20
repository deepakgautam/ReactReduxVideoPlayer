import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectVideo} from '../actions/index'

const VideoListItem = ({video,onChangehandler}) =>  {
    console.log('video received '+video);
    const imgurl= video.snippet.thumbnails.default.url;
    console.log('image url '+imgurl);
    return(
        <li className = "list-group-item" /*onClick={() => this.props.selectVideo(video)}*/>
         <div className="video-list media">
           <div className="media-left">
            <img  className="media-object" src={imgurl} />
           </div>
           <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
           </div>
         </div>
        </li>
        )    
}

// // Anything returned from this function will end up as props
// // on the VideoListItem container
// function mapDispatchToProps(dispatch) {
//   // Whenever VideoListItem is called, the result shoudl be passed
//   // to all of our reducers
//   return bindActionCreators({ selectVideo : selectVideo }, dispatch);
// }
// export default connect(null,mapDispatchToProps)(VideoListItem);  
export default VideoListItem;