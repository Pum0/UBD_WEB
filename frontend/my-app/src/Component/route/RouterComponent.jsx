import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddUserComponent from "../user/AddUserComponent";
import Home from "../basic/Home";
import Main from "../basic/Main";

class AppRouter extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"><Main></Main></Route>
                        <Route path="/Home"> <Home></Home> </Route>
                        <Route path="/board"> </Route>
                        <Route path="/sign-in"><AddUserComponent></AddUserComponent></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}


export default AppRouter;