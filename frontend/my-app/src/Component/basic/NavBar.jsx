import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDisplay: false,
            NavDis: 'none'
        }
    }


    openSubNav = (e) => {
        e.preventDefault();

        let SubNavState = this.isDisplay;

        if( SubNavState === false){
            e.setState= {
                NavDis: 'inline'
            }
            this.isDisplay= true;

        }
        else {
            e.setState= {
                NavDis: 'none'
            }
            this.isDisplay = false;
        }
    }



    render() {
        const Sub_Nav = {
            left: "0px",
            width: "28%",
            height: "50px",
            border: '1px solid black',
            top: "50px",
            display: this.state.NavDis
        }
        const style = {
            flexGrow: 1,
            marginBottom: '10px'
        }

        const Main_Nav = {
            position: "absolute",
            border: '1px solid black',
            height: '50px',
        }


        return (
            <div>
                <AppBar color="inherit" style={Main_Nav}>
                    <Toolbar>

                        <IconButton edge="start" color="inherit" aria-label="Menu"
                        onClick={this.openSubNav}>
                            <ArrowDropDownIcon/>
                        </IconButton>

                        <Typography variant="h6" style={style}>
                            UBD
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* 서브 네비바 */}
                <AppBar className="SubNav" color="inherit" position="absolute" style={Sub_Nav}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu" >
                            <ArrowDropUpIcon/>
                        </IconButton>
                        <Button>
                            <Typography variant="h6" style={style}>커뮤니티</Typography>
                        </Button>
                        <Button>
                            <Typography variant="h6" style={style}>나의 기록</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default NavBar;