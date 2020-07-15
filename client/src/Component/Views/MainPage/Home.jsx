import React from "react";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import Board_Area from "../Navbar/NavSection/PostNav";
import {Route, Switch, withRouter} from "react-router-dom";
import Auth from "../../../hoc/auth";

function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <MapAPI></MapAPI>

            {/*<useMapApi></useMapApi>*/}


            <Switch>
                <Route path="/Home/board" component={Auth(Board_Area, true)}/>
            </Switch>
        </div>
    );
}


export default withRouter(Home);