import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


class Sharing_Board extends Component {

    render() {
        return (
            <div style={Board_style}>

                <h2> Sharing Board</h2>
                공유 게시판
            </div>
        );
    }

}
const Board_style = {
    border: '1px solid black',
    margin:0,
    padding:0,
    top: "50px",
    position: "absolute",
    left: 0, height: "95%",
    width: "100%",
    backgroundColor: "magenta",
    zIndex: 451
}
export default Sharing_Board;