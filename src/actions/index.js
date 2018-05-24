import axios from 'axios'
import YTSearch from 'youtube-api-search';
//please use your own youtube api key 
//for generating your api key refer this link  -> https://developers.google.com/youtube/android/player/register
const youtubeApiSearchKey = 'AIzaSyAtEptxVFOx2QSoS2Ov-lbakSgGJflp9Bs'// plese user your own key;

 /* 
     selectVideo is an ActionCreator, it needs to return an action,
     an object with a type property and payLoad(optional) 
     payLoad contains additional details which can be used in the reducer
 */   
export function selectVideo(videoSelected) {
    return  {
        type : 'SELECT_VIDEO',
        payload : {video : videoSelected}
      };
}

 /* 
     searchVideo is an ActionCreator, it needs to return an action,
     an object with a type property and payLoad(optional) 
     payLoad contains additional details which can be used in the reducer
 */ 
export function searchVideo(term) {
      let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&key=${youtubeApiSearchKey}`);
      return {
            type : 'VIDEO_SEARCHED',
            payload : request
          };
}
  
export function searchTrendingVideo(term) {
    let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&key=${youtubeApiSearchKey}`);
    return {
          type : 'TRENDING_VIDEO_SEARCH',
          payload : request
        };
}
export function loadindState(status) {
    return {
          type : 'CHNAGE_LOADING_STATE',
          payload : status
        };
}