import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "../user/AddUserComponent";
import Home from "../basic/Home";
import Main from "../basic/Main";
import Board_Area from "../board/Board_Area";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/Home" component={Home}/>
                        <Route path="/sign-up" component={AddUserComponent}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default AppRouter;