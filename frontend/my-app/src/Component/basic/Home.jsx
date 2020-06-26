import React, {Component} from "react";
import MapAPI from "./MapAPI";
import NavBar from "./NavBar";
import ContentRouter from "../route/ContentRouter";
import Board_Area from "../board/Board_Area";
import {Route, Switch} from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <MapAPI></MapAPI>



                <Switch>
                    <Route path="/Home/board" component={Board_Area}/>
                </Switch>

            </div>
        );

    }
}

// const style= {
//     display:"absolute",
//     width:"100%",
//     height:"100%"
// }

export default Home;