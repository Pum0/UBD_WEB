import axios from 'axios';
import {
    LOGIN_USER,
} from './types';


export function loginUser(dataToSubmit) {
    
    // 클라이언트에서 입력한 정보를 서버로 보냄
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}