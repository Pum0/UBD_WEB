import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';



export default function (SpecificComponent, option, adminRoute = null) {

    // option
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입이 불가능한 페이지

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(async response => {
                console.log(response)

                // 비로그인 상태
                if (await !response.payload.isAuth) {
                    if (option) {
                        alert('비정상적인 접근입니다.(비로그인)')
                        props.history.push('/login')
                    }
                } else {
                    // 로그인 상태
                    if (adminRoute && !response.payload.isAdmin) {
                        // alert('비정상적인 접근입니다.')
                        props.history.push('/')
                    } else {
                        if (option === false)
                        alert('비정상적인 접근입니다.')
                            props.history.push('/')
                    }
                }
            })
        }, [dispatch, props.history])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}