import React from "react";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import Board_Area from "../board/BoardArea";
import {Route, Switch, withRouter} from "react-router-dom";
import Auth from "../../../hoc/auth";
import {Grid, Paper} from "@material-ui/core";
import BoardArea from "../board/BoardArea";

function Home() {
    return (
        <div style={{position:"static"}}>
            <NavBar/>
            <MapAPI></MapAPI>

            <Switch>
                <Route path="/Home/board" component={Auth(BoardArea, true)}/>
            </Switch>
</div>
);
}


export default withRouter(Home);