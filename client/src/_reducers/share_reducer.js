import {
    SAVE_SHAREPOST
} from '../_actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case SAVE_SHAREPOST:
            return { ...state, sharePostData: action.payload }
            break;

        default:
            return state;
    }
}