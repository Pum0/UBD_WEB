import { Layout } from "antd";
import React from "react";
import { Switch, withRouter } from "react-router-dom";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import User_Avatar from "../Navbar/Sections/User_Avatar";
import ContentRouter from "../route/ContentRouter";


function Home() {
    const { Header, Content, Footer } = Layout;



    return (

        <Layout>
            {/* <User_Avatar /> */}

            <NavBar />
            {/* == <Sider> 내용 </Sider> */}

            <MapAPI />

            <Switch>
                <ContentRouter />
            </Switch>

        </Layout>


    );
}


export default withRouter(Home);