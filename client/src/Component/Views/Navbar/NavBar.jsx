import { Layout, Menu } from 'antd';
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { USER_SERVER } from "../../config";
import { Drawer } from "antd";
import BoardList from "../PostListPage/BoardList"
import { MessageOutlined } from "@ant-design/icons"

function NavBar(props) {
    const user = useSelector(state => state.user);

    const drawerSize = '33%'

    const onClickHandler = () => {
        axios.get(`${USER_SERVER}/logout`)
            .then(response => {
                if (response.data.success) {
                    props.history.push("/")
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }

    // drawer visible
    const [visible, setVisible] = useState(false);

    const { Sider } = Layout;
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    return (
        <Sider style={{minWidth:"55px", maxWidth:"55px"}}>
            <Menu style={{ width: "250px" }} theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={showDrawer} icon={<MessageOutlined />}> 자유게시판  </Menu.Item>
                <Menu.Item key="2"><NavLink to="/Home/share_board" />공유게시판</Menu.Item>
                <Menu.Item key="3"> <NavLink to="/Home/my_record" />나의기록</Menu.Item>
            </Menu> 

            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={true}
                mask={false}
                maskClosable={false}
                onClose={onClose}
                visible={visible}
                width="500px"
            >
                <BoardList />
            </Drawer>

        </Sider>

    );
}


export default withRouter(NavBar);