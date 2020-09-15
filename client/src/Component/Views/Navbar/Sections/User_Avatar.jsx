import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popover, Button } from 'antd';

import { USER_SERVER } from "../../../config";
import { UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../../../_actions/user_action"


function User_Avatar(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const onClickHandler = () => {

        let body = {
            _id: user.userData._id
        }

        dispatch(logoutUser(body))
            .then(response => {
                if (response.payload.logoutSuccess) {
                    props.history.push('/')
                } else {
                    alert('로그인 실패')
                }
            })
    }

    const text = (
        <div style={{ height: "100px", Width: "100px" }}>
            <Avatar size={48} icon={<UserOutlined />} />
            <Button onClick={onClickHandler}> LogOut </Button>
        </div>
    );
    const content = (
        <div style={{ height: "50px", Width: "200px" }}>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <Popover placement="bottomRight" title={text} content={content} trigger="click">
            <Avatar size={48} icon={<UserOutlined />} onclick={content} />

        </Popover>

    )

}
export default withRouter(User_Avatar);