import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterPage from "../RegisterPage/RegisterPage";
import Home from "../MainPage/Home";
import Main from "../WelcomePage/Main";
import Auth from "../../../hoc/auth";

class AppRouter extends Component {
    // option
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입이 불가능한 페이지
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Auth(Main, false)}/>
                        <Route exact path="/signup" component={Auth(RegisterPage, false)}/>
                        <Route  path="/home" component={Auth(Home, true)}/>
                    </Switch>


                </div>
            </Router>
        );
    }
}


export default AppRouter;