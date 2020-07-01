import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import RouterComponent from "./Component/route/RouterComponent"
import ContentRouter from "./Component/route/ContentRouter";
import Board_Area from "./Component/board/Board_Area";
import AppRouter from "./Component/route/RouterComponent";


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
