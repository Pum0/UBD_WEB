import axios from 'axios';
import {
    WRITE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_POST
} from './types';
import { POST_SERVER } from '../Component/config';


// 게시글 작성 액션
export function writePost(dataToSubmit) {

    const request = axios.post(`${POST_SERVER}/writePost`, dataToSubmit)
        .then(response => response.data)

    return {
        type: WRITE_POST,
        payload: request
    }
}

// 게시글 수정 액션
export function updatePost(dataToSubmit) {

    const request = axios.post(`${POST_SERVER}/updatePost`, dataToSubmit)
        .then(response => response.data)

    return {
        type: UPDATE_POST,
        payload: request
    }
}

// 게시글 삭제 액션
export function deletePost(dataToSubmit) {

    const request = axios.post(`${POST_SERVER}/deletePost`, dataToSubmit)
        .then(response => response.data)

    return {
        type: DELETE_POST,
        payload: request
    }
}

// 게시글 불러오기 액션
export function getPost() {

    const request = axios.post(`${POST_SERVER}/getPost`)
        .then(response => response.data)

    return {
        type: GET_POST,
        payload: request
    }
}
