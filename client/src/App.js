import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./Component/route/RouterComponent"


function App() {
    return (
        <Router>
            <div>
                <AppRouter></AppRouter>
            </div>
        </Router>
    );
}


export default App;
