import React from "react";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import Board_Area from "../Navbar/NavSections/BoardNav";
import {Route, Switch, withRouter} from "react-router-dom";
import Auth from "../../../hoc/auth";
import {Grid, Paper} from "@material-ui/core";
import BoardArea from "../Navbar/NavSections/BoardNav";

function Home() {
    return (
        <div style={{position:"static"}}>
            <NavBar/>
            <MapAPI></MapAPI>


</div>
);
}


export default withRouter(Home);