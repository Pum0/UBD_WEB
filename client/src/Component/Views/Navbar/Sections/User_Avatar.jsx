import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Avatar, Popover } from 'antd';

import { USER_SERVER } from "../../../config";
import { UserOutlined } from "@ant-design/icons";


function User_Avatar(props) {

    const text = (
        <div style={{height: "100px", Width: "100px" }}>
            <Avatar size={48} icon={<UserOutlined />} />
            <span></span>
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
            <Avatar size={64} icon={<UserOutlined />} onclick={content} />
        </Popover>
    )

}
export default withRouter(User_Avatar);