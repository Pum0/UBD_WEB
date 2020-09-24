import { combineReducers } from 'redux';
import user from './user_reducer';
import post from './post_reducer';
import comment from './comment_reducer';
import rideInfo from './rideinfo_reducer';

const rootReducer = combineReducers({
    user,
    post,
    comment,
    rideInfo

})

export default rootReducer;