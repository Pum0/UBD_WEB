import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "../user/RegisterPage";
import Home from "../basic/Home";
import Main from "../basic/Main";
import Auth from "../../hoc/auth";
import Board_Area from "../board/Board_Area";
import RegisterPage from "../user/RegisterPage"

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
                        <Route path="/Home" component={Auth(Home, true)}/>


                        {/*<Route exact path="/" component={Main}/>*/}
                        {/*<Route exact path="/signup" component={RegisterPage}/>*/}
                        {/*<Route path="/Home" component={Home}/>*/}

                    </Switch>
                </div>
            </Router>
        );
    }
}


export default AppRouter;