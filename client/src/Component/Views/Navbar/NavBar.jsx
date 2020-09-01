import { Layout, Menu, Button } from 'antd';
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { USER_SERVER } from "../../config";
import { Drawer } from "antd";
import BoardList from "../PostListPage/BoardList"
import { MessageOutlined, ShareAltOutlined, FileTextOutlined } from "@ant-design/icons"
import SharingList from "../SharingPage/SharingList";
import RecordList from "../RecordPage/RecordList";

function NavBar(props) {
    const user = useSelector(state => state.user);

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
    const { Sider } = Layout;
    // Board drawer visible
    const [BoardVisible, setBoardVisible] = useState(false);
    
    const showBoardDrawer = () => {
        setBoardVisible(true);
    };

    const onBoardClose = () => {
        setBoardVisible(false);
    };

    // Share drawer visible
    const [ShareVisible, setShareVisible] = useState(false);

    const showShareDrawer = () => {
        setShareVisible(true);
    };

    const onSharClose = () => {
        setShareVisible(false);
    };

    // Record drawer visible
    const [RecordVisible, setRecordVisible] = useState(false);

    const showRecordDrawer = () => {
        setRecordVisible(true);
    };

    const onRecordClose = () => {
        setRecordVisible(false);
    };



    return (
        <Sider style={{ minWidth: "55px", maxWidth: "55px" }}>
            <Menu style={{ width: "250px" }} theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={showBoardDrawer} icon={<MessageOutlined />}> 자유게시판  </Menu.Item>
                <Menu.Item key="2" onClick={showShareDrawer} icon={<ShareAltOutlined />}>공유게시판</Menu.Item>
                <Menu.Item key="3" onClick={showRecordDrawer} icon={<FileTextOutlined />}>나의기록</Menu.Item>
            </Menu>
            {/* -------------- 자유게시판 -------------- */}
            <Drawer
                placement="left"
                closable={true}
                mask={false}
                maskClosable={false}
                onClose={onBoardClose}
                visible={BoardVisible}
                width="650px"
   
            >
                <BoardList />
            </Drawer>

            {/* -------------- 공유게시판 -------------- */}
            <Drawer
                placement="left"
                closable={true}
                mask={false}
                maskClosable={false}
                onClose={onSharClose}
                visible={ShareVisible}
                width="650px"
            >
                <SharingList />
            </Drawer>

            {/* -------------- 나의 기록 -------------- */}
            <Drawer
                placement="left"
                closable={true}
                mask={false}
                maskClosable={false}
                onClose={onRecordClose}
                visible={RecordVisible}
                width="650px"
            >
                <RecordList />
            </Drawer>


            <Button onClick={onClickHandler}> LogOut </Button>


        </Sider>

    );
}


export default withRouter(NavBar);