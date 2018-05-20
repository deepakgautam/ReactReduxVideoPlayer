
/* this is the reducer responsible for reducing videos key of Application state as per the
   search term also trengin videos
   NOTE -  Here state is not the state of the application it  is the state for which 
           this reducer is responsible to change , if any call does not mathchs with 
           the type of this reducer than return same privious state .
*/
export default function(state = null, action) { 
   if (typeof action == 'undefined') return state;
    switch(action.type) {
        case 'VIDEO_SEARCHED_FULFILLED' :
        {
            return  Object.assign({}, state, {
                videos: action.payload.data
              });
        }
        case 'TRENDING_VIDEO_SEARCH_FULFILLED':
         {
            return  Object.assign({}, state, {
                trendingVideos: action.payload.data
              });
        }
        default :
        {
          return state;
        }
    }
};
