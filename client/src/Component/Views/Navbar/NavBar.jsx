import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from "axios";
import {USER_SERVER} from "../../config";
import {Paper, TableContainer} from "@material-ui/core";
import {Tabs} from "antd";



function NavBar(props) {
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

    return (
        <div>
            <AppBar color="inherit" component={Paper}>
                <Toolbar>
                    <NavLink to="/Home/board">
                        <IconButton edge="start" color="inherit" aria-label="Menu">

                            <ArrowDropDownIcon/>

                        </IconButton>
                    </NavLink>

                    <Typography variant="h4">
                        UBD
                    </Typography>


                    <IconButton color="inherit" aria-label="Menu" onClick={onClickHandler}>
                        <MeetingRoomIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    );
}



export default withRouter(NavBar);