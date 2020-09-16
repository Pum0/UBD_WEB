import {
    GET_RIDEINFO
} from '../_actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case GET_RIDEINFO:
            return { ...state, rideinfoData: action.payload }
            break;

        default:
            return state;
    }
}