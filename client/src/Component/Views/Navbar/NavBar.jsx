import React, {Component, useState} from "react";
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
import BoardNav from "./NavSections/BoardNav";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";


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


    const [isOpen, setIsOpen] = useState(false);

    const onOpenHandler = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }


    const ArrowImage = () => {
        if (isOpen) {
            return (
                <IconButton edge="start" color="inherit" aria-label="Menu"
                            onClick={onOpenHandler}>
                    <ArrowDropUpIcon/>
                </IconButton>
            );
        } else {
            return (
                <IconButton edge="start" color="inherit" aria-label="Menu"
                            onClick={onOpenHandler}>
                    <ArrowDropDownIcon/>
                </IconButton>
            )
        }
    }

    return (
        <div>
            <AppBar color="inherit" component={Paper} style={{display: "flex"}}>
                <Toolbar>
                    <ArrowImage />

                    <Typography variant="h4">
                        UBD Map
                    </Typography>


                    <IconButton color="inherit" aria-label="Menu" onClick={onClickHandler}>
                        <MeetingRoomIcon/>
                    </IconButton>
                </Toolbar>
                <BoardNav isOpen={isOpen}/>

            </AppBar>


        </div>
    );
}


export default withRouter(NavBar);