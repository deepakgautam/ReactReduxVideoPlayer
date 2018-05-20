import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import Player from '../components/player';
import VideoListItem from  './video_list_item'
import VideoList from './video_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {searchVideo ,searchTrendingVideo,loadindState}from '../actions/'
class App extends React.Component{
  
  constructor(){
    super();
  }
 render (){
   if (this.props && !this.props.first_load) {
     console.log('props first load '+this.props.first_load);
    let  options = [{term:'bitcoin'},{term:'ipl 2018'},{term:'bollywood trailers'},{term:'hollywood trailers'},{term:'competitive programming'},{term:'football match'},{term:'roadies extreem'},{term:'js tutorial'},{term:'google search engin optimization'},{term:'data structure tutorial'},{term:'BCCL'},{term:'icl'},{term:'reactJs'}]
    var randomIndex=Math.floor(Math.random() * Math.floor(13));
    this.props.searchTrending('recent trending videos');
    this.props.search(options[randomIndex]['term']);
    this.props.change_loading_state(true);
   }
   return (
        <div className="row">
           <div className="clo-md-12 col-lg-12">
              <SearchBar/>
            </div> 
            <div className="clo-md-8 col-lg-8">
               <Player
                video = {this.props.selectedVideo} 
               />
            </div>
            <div className="clo-md-4 col-lg-4">
                {this.props.videos  &&  this.props.videos.videos &&
                <div class="trendingVideos">
                  <h1>Your Search</h1>
                  <VideoList 
                  videos = {this.props.videos.videos}
                  />
                </div>
               }
               {this.props.videos  &&  this.props.videos.trendingVideos &&
                <div class="trendingVideos">
                  <h1>Trendings</h1>
                  <VideoList 
                  videos = {this.props.videos.trendingVideos}
                  />
                </div>
               }
            </div>
        </div>
   )
 }
}
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of App
  let videoplayer_video = state.selectedVideo ? state.selectedVideo :(state.videos && state.videos.videos ?  state.videos.videos.items[0] : null);
  return {
    videos : state.videos ,
    selectedVideo : videoplayer_video ,
    first_load :state.first_load
  };
}
// Anything returned from this function will end up as props
// on the SearchBar container
function mapDispatchToProps(dispatch) {
  // Whenever searchVideo is called, the result shoudl be passed
  // to all of our reducers via action creators
  return bindActionCreators({ search: searchVideo ,searchTrending:searchTrendingVideo,change_loading_state:loadindState}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

