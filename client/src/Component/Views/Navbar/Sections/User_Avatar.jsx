import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Popover, Button } from 'antd';

import { USER_SERVER } from "../../../config";
import { UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";


function User_Avatar(props) {

    const onClickHandler = () => {
        axios.get(`${USER_SERVER}/logout`)
            .then(response => {
                if (response.data.success) {
                    props.history.push("/");
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
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