import { Layout, Button } from "antd";
import React, { useState } from "react";
import { Switch, withRouter } from "react-router-dom";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import User_Avatar from "../Navbar/Sections/User_Avatar";
import ContentRouter from "../route/ContentRouter";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Home(props) {
    const { Header, Content, Footer } = Layout;

    const [drawPath, setDrawPath] = useState([
        { lat: 35.896200, lng: 128.622062 },
        { lat: 35.896500, lng: 128.622062 },
        { lat: 35.896500, lng: 128.622062 },
        { lat: 35.897500, lng: 128.622062 },
        { lat: 35.897500, lng: 128.625062 },
]
    );


    const holyShit = () => {
        console.log(drawPath)
    }


    return (
        <div style={{}}>
            <div style={{ display: "flex" }}>
                <Layout style={{ position: "absolute", width: "89.3%", height: "100%" }}>
                    {/* <User_Avatar /> */}
                    <NavBar setDrawPath={setDrawPath} />
                    {/* == <Sider> 내용 </Sider> */}
                    <MapAPI drawPath={drawPath} />

                    <Switch>
                        <ContentRouter />
                    </Switch>

                </Layout>
            </div>
            <Button onClick={holyShit}> 클릭ㅋ </Button>

        </div>
    );
}


export default withRouter(Home);