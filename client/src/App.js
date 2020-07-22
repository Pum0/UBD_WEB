import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./Component/Views/route/RouterComponent"
import NavBar from './Component/Views/Navbar/NavBar';
import Home from "./Component/Views/MainPage/Home"
import ContentRouter from './Component/Views/route/ContentRouter';


function App() {
    return (
        <Router>
            <div>

                <AppRouter />
                <ContentRouter />
            </div>
        </Router>
    );
}


export default App;
