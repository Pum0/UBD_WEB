import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterPage from "../user/RegisterPage";
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
                        {/* 입장 페이지 - 로그인 페이지 */}
                        <Route exact path="/" component={Auth(Main, false)}/>
                        {/* 회원가입 페이지 */}
                        <Route exact path="/signup" component={Auth(RegisterPage, false)}/>
                        {/* NavBar + Map  */}
                        <Route  path="/Home" component={Auth(Home, true)}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default AppRouter;