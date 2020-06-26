import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ContentRouter from "../route/ContentRouter";

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDisplay: false,
            NavDis: 'none'
        }
    }

    render() {


        return (
            <div>
                <AppBar color="inherit" style={Main_Nav}>
                    <Toolbar>
                        <NavLink to="/Home/board">
                            <IconButton edge="start" color="inherit" aria-label="Menu">

                                <ArrowDropDownIcon/>

                            </IconButton>
                        </NavLink>

                        <Typography variant="h4" style={style}>
                            UBD
                        </Typography>
                    </Toolbar>
                </AppBar>



            </div>
        );
    }

}


const style = {
    flexGrow: 1,
    marginBottom: '10px'
}

const Main_Nav = {
    position: "absolute",
    border: '1px solid black',
    height: '50px'
}
export default NavBar;