import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectVideo} from '../actions/index'

const VideoListItem = ({video,selectVideoChange}) =>  {
    const imgurl= video.snippet.thumbnails.default.url;
    return(
        <li className = "list-group-item" onClick={() => selectVideoChange(video)}>
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideoChange : selectVideo }, dispatch);
}
export default connect(null,mapDispatchToProps)(VideoListItem);  
