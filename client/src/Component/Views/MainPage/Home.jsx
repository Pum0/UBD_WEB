import { Layout, Button } from "antd";
import React, { useState, useEffect } from "react";
import { Switch, withRouter } from "react-router-dom";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import User_Avatar from "../Navbar/Sections/User_Avatar";
import ContentRouter from "../route/ContentRouter";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Home(props) {
    const { Header, Content, Footer } = Layout;

    var [drawPath, setDrawPath] = useState([
    ]
    );

    var [pathView, setPathView] = useState({ lat: 35.896500, lng: 128.622062 });

    // useEffect(() => {

    // }, [drawPath])

    return (
        <div style={{}}>
            <div style={{ display: "flex" }}>
                <Layout style={{ position: "absolute", width: "89.3%", height: "100%" }}>
                    {/* <User_Avatar /> */}
                    <NavBar setDrawPath={setDrawPath} setPathView={setPathView} />
                    {/* == <Sider> 내용 </Sider> */}
                    <MapAPI drawPath={drawPath} pathView={pathView}/>

                    <Switch>
                        <ContentRouter />
                    </Switch>

                </Layout>
            </div>

        </div>
    );
}


export default withRouter(Home);