import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Avatar, Popover } from 'antd';

import { USER_SERVER } from "../../../config";

function User_Avatar(props) {

    const text = (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <span>Title</span>
        </div>
    );
    const content = (
        <div>
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