import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from "axios";
import {USER_SERVER} from "../config";


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
            <AppBar color="inherit" style={Main_Nav}>
                <Toolbar>
                    <NavLink to="/Home/board">
                        <IconButton edge="start" color="inherit" aria-label="Menu" style={style}>

                            <ArrowDropDownIcon/>

                        </IconButton>
                    </NavLink>

                    <Typography variant="h4" style={style}>
                        UBD
                    </Typography>


                    <IconButton color="inherit" aria-label="Menu" style={{marginBottom: '12px'}}
                                onClick={onClickHandler}>
                        <MeetingRoomIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>


        </div>
    );
}


const style = {
    flexGrow: 1,
    marginBottom: '12px'
}

const Main_Nav = {
    position: "absolute",
    border: '1px solid black',
    height: '50px'
}


export default withRouter(NavBar);