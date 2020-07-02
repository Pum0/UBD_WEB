import axios from 'axios';
import {
    WRITE_POST
} from './types';
import { USER_SERVER } from '../Component/config';

// 로그인 액션
export function writepost(variables) {

    // 클라이언트에서 입력한 로그인 정보를 서버로 보냄
    const request = axios.post(`${ USER_SERVER }/writepost`, variables)
        .then(response => response.data)

    return {
        type: WRITE_POST,
        payload: request
    }
}