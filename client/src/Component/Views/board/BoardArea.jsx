import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ContentRouter from "../route/ContentRouter";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Tabs} from "antd";
import BoardList from "../PostListPage/BoardList";
import RecordPage from "./RecordPage";
import SharingPost from "./SharingPost";

const {TabPane} = Tabs;


function BoardArea(props) {
    return (
        <div style={{Top:"10%",position: "absolute", width: "100%", zIndex: 999}}>

            <NavLink to="/Home">
                <IconButton edge="start" color="inherit">
                    <ArrowDropUpIcon/>
                </IconButton>
            </NavLink>


            <NavLink to="/Home/board/BoardList">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">자유게시판</Typography>
                </Button>
            </NavLink>


            <NavLink to="/Home/board/share_board">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">공유게시판</Typography>
                </Button>
            </NavLink>

            <NavLink to="/Home/board/my_record">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">나의기록</Typography>
                </Button>
            </NavLink>


            <Tabs defaultActiveKey="1">
                <TabPane tab="자유게시판" key="1">
                    <BoardList/>
                </TabPane>
                <TabPane tab="공유게시판" key="2">
                    <SharingPost/>
                </TabPane>
                <TabPane tab="나의기록" key="3">
                    <RecordPage/>
                </TabPane>
            </Tabs>

            <ContentRouter></ContentRouter>

        </div>
    );
}


export default withRouter(BoardArea);