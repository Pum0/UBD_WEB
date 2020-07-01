import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import RouterComponent from "./Component/route/RouterComponent"
import ContentRouter from "./Component/route/ContentRouter";
import Board_Area from "./Component/board/Board_Area";


function App() {
    return (
        <Router>
            <div>
                <ContentRouter></ContentRouter>
                <RouterComponent></RouterComponent>

            </div>
        </Router>
    );
}


export default App;
