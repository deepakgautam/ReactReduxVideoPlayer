export default function(state = false, action) { 
    
    if(typeof action == 'undefined') return state;
    switch(action.type) {
       
        case 'CHNAGE_LOADING_STATE' :
        {
            return action.payload;
            break;
        }
    }
    return state;
};