import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    WRITE_POST,
    UPDATE_POST,
    DELETE_POST,
    WRITE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from './types';
import { USER_SERVER } from '../Component/config';
import { POST_SERVER } from '../Component/config';
import { COMMENT_SERVER } from '../Component/config';

// 로그인 액션
export function loginUser(dataToSubmit) {

    // 클라이언트에서 입력한 로그인 정보를 서버로 보냄
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

// 회원가입 액션
export function registerUser(dataToSubmit) {

    // 클라이언트에서 입력한 회원가입 정보를 서버로 보냄
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

// 인증 액션
export function auth() {

    // 클라이언트에서 입력한 회원가입 정보를 서버로 보냄
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}

//로그아웃 액션
export function logoutUser() {

    // 클라이언트에서 요청한 로그아웃 정보를 서버로 보냄
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data)

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

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