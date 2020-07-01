import React, {Component} from "react";
import MapAPI from "./MapAPI";
import NavBar from "./NavBar";
import ContentRouter from "../route/ContentRouter";
import Board_Area from "../board/Board_Area";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Auth from "../../hoc/auth";


function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <MapAPI></MapAPI>


            <Switch>
                <Route path="/Home/board" component={Auth(Board_Area, true)}/>
            </Switch>
        </div>
    );
}


export default withRouter(Home);