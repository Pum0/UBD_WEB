import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import RouterComponent from "./Component/route/RouterComponent"
import ContentRouter from "./Component/route/ContentRouter";
import Board_Area from "./Component/board/Board_Area";


function App() {
    return (
        <Router>
            <div>
                <RouterComponent></RouterComponent>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null, true)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
