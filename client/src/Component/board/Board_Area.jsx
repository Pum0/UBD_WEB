import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ContentRouter from "../route/ContentRouter";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Auth from "../../hoc/auth";
import BoardWritePage from "./BoardWritePage";

class Board_Area extends Component {
    render() {
        return (
            <div style={Board_style}>


                <AppBar color="inherit" style={Board_Nav}>
                    <Toolbar>
                        <NavLink to="/Home">
                            <IconButton edge="start" color="inherit" style={style}>
                                <ArrowDropUpIcon/>
                            </IconButton>
                        </NavLink>

                        <NavLink to="/Home/board/CommunityBoardList">
                            <Button edge="start" color="inherit" style={style}>
                                <Typography variant="h6">자유게시판</Typography>
                            </Button>
                        </NavLink>

                        <NavLink to="/Home/board/share_board">
                            <Button edge="start" color="inherit" style={style}>
                                <Typography variant="h6">공유게시판</Typography>
                            </Button>
                        </NavLink>


                        <NavLink to="/Home/board/my_record">
                            <Button edge="start" color="inherit" style={style}>
                                <Typography variant="h6">나의기록</Typography>
                            </Button>
                        </NavLink>

                    </Toolbar>
                </AppBar>

                <ContentRouter></ContentRouter>
            </div>
        );
    }
}

const Board_style = {
    border: '1px solid black',
    margin: 0,
    padding: 0,
    top: "50px",
    position: "absolute",
    left: 0, height: "95%",
    width: "28%",
    backgroundColor: "white",
    zIndex: 450
}

const style = {

    flexGrow: 1,
    marginBottom: '12px'
}

const Board_Nav = {
    position: "absolute",
    border: '1px solid black',
    height: '50px'
}

export default withRouter(Board_Area);