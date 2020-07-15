import axios from 'axios';
import {
    WRITE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from './types';
import { COMMENT_SERVER } from '../Component/config';

// 댓글 작성 액션
export function writeComment(dataToSubmit) {

    const request = axios.post(`${COMMENT_SERVER}/writeComment`, dataToSubmit)
        .then(response => response.data)

    return {
        type: WRITE_COMMENT,
        payload: request
    }
}

// 댓글 수정 액션
export function updateComment(dataToSubmit) {

    const request = axios.post(`${COMMENT_SERVER}/updateComment`, dataToSubmit)
        .then(response => response.data)

    return {
        type: UPDATE_COMMENT,
        payload: request
    }
}

// 댓글 삭제 액션
export function deleteComment(dataToSubmit) {

    const request = axios.post(`${COMMENT_SERVER}/deleteComment`, dataToSubmit)
        .then(response => response.data)

    return {
        type: DELETE_COMMENT,
        payload: request
    }
}