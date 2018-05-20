import { combineReducers } from 'redux';
import SelectedVideoReducer from './SelectedVideoReducer';
import SearchVideoReducer from './VideoSearchReducer';
import First_loadReducer from './initial_setupReducer'

/* this is the root reducers  for all  reducers
   state is the state the Application state 
   all these keys {video, selectedVideo} are available
   as the key of the application state and used in the react 
*/

const rootReducer = combineReducers({
   videos : SearchVideoReducer,
   selectedVideo : SelectedVideoReducer ,
   first_load : First_loadReducer
});

export default rootReducer;
