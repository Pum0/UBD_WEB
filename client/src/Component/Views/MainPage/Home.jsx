import { Layout } from "antd";
import React from "react";
import { Switch, withRouter } from "react-router-dom";
import MapAPI from "../Map/MapAPI";
import NavBar from "../Navbar/NavBar";
import ContentRouter from "../route/ContentRouter";

function Home() {
    const { Header, Content, Footer } = Layout;



    return (

        <Layout>

            <NavBar />
            {/* == <Sider> 내용 </Sider> */}

            <Content><MapAPI /></Content>

            <Switch>
                <ContentRouter />
            </Switch>

        </Layout>


    );
}


export default withRouter(Home);