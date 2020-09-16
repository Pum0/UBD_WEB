import axios from 'axios';
import {
    GET_RIDEINFO
} from './types';
import { RIDEINFO_SERVER } from '../Component/config';

// 주행정보 불러오기
export function getRideInfo() {

    const request = axios.get(`${RIDEINFO_SERVER}/getRideInfo` )
        .then(response => response.data)

    return {
        type: GET_RIDEINFO,
        payload: request
    }
}