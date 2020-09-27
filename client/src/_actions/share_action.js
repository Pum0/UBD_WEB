import axios from 'axios';
import {
    SAVE_SHAREPOST,
    GET_SHAREPOST
} from './types';
import { SHARE_SERVER } from '../Component/config';

// 주행정보 불러오기
export function saveSharePost(dataToSubmit) {

    const request = axios.post(`${SHARE_SERVER}/saveSharePost`, dataToSubmit)
        .then(response => response.data)


    return {
        type: SAVE_SHAREPOST,
        payload: request
    }
}    

export function getSharePost() {

    const request = axios.get(`${SHARE_SERVER}/getSharePost`, )
        .then(response => response.data)


    return {
        type: GET_SHAREPOST,
        payload: request
    }
}