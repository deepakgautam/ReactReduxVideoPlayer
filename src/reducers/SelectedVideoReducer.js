/* this is the reducer responsible for reducing  selectedVideo key of application state
   as per the selection made from ui
   NOTE -  Here state is not the state of the application it  is the state for which 
           this reducer is responsible to change , if any call does not mathchs with 
           the type of this reducer than return same privious state     
*/
export default function(state = null, action) { 
    if(typeof action == 'undefined') return state;
    switch(action.type) {
        case 'SELECT_VIDEO' :
        {
            return action.payload.video;
        }
    }
    return state;
};