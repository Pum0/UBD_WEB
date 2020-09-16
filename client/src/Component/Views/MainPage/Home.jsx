import { Layout, Button } from "antd";
import React from "react";
import { Switch, withRouter } from "react-router-dom";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import User_Avatar from "../Navbar/Sections/User_Avatar";
import ContentRouter from "../route/ContentRouter";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Home(props) {
    const { Header, Content, Footer } = Layout;

  

    return (
        <div style={{}}>
            <div style={{ display: "flex"}}>
                <Layout style={{position:"absolute", width:"89.3%",height:"100%"}}>
                    {/* <User_Avatar /> */}
                    <NavBar />
                    {/* == <Sider> 내용 </Sider> */}
                    <MapAPI/>

                    <Switch>
                        <ContentRouter />
                    </Switch>
                    
                </Layout>
            </div>
        </div>
    );
}


export default withRouter(Home);