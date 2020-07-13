import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppRouter from "./Component/Views/route/RouterComponent"
import Auth from "./hoc/auth";
import Main from "./Component/Views/WelcomePage/Main";
import RegisterPage from "./Component/Views/RegisterPage/RegisterPage";
import Home from "./Component/Views/MainPage/Home";
import BoardArea from "./Component/Views/board/BoardArea";
import RecordPage from "./Component/Views/board/RecordPage";
import BoardList from "./Component/Views/PostListPage/BoardList";
import Sharing_Board from "./Component/Views/board/SharingPost";
import PostWritePage from "./Component/Views/PostPage/PostWritePage";
import _PostPage from "./Component/Views/PostPage/_PostPage";
import PostUpdatePage from "./Component/Views/PostPage/PostUpdatePage";


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
