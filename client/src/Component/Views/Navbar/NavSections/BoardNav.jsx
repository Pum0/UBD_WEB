import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ContentRouter from "../../route/ContentRouter";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


function BoardNav(props) {
    const NavOpen = props.isOpen;

    return (

        <div style={{Top:"100px", width: "100%", zIndex: 999}}>



            <NavLink to="/Home/BoardList">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">자유게시판</Typography>
                </Button>
            </NavLink>


            <NavLink to="/Home/share_board">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">공유게시판</Typography>
                </Button>
            </NavLink>

            <NavLink to="/Home/my_record">
                <Button edge="start" color="inherit">
                    <Typography variant="h6">나의기록</Typography>
                </Button>
            </NavLink>


            <ContentRouter></ContentRouter>

        </div>
    );
}


export default withRouter(BoardNav);