import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from "axios";
import { USER_SERVER } from "../../config";
import { Paper, TableContainer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { Layout, Menu, Breadcrumb,Button } from 'antd';



function NavBar(props) {
    const onClickHandler = () => {
        axios.get(`${USER_SERVER}/logout`)
            .then(response => {
                if (response.data.success) {
                    props.history.push("/")
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }



    const { Header, Content, Footer } = Layout;


    return (
        // <AppBar color="inherit" style={Main_Nav}  component={Paper}>
        //     <Toolbar>
        //         <NavLink to="/Home/board">
        //             <IconButton edge="start" color="inherit" aria-label="Menu" style={style}>

        //                 <MenuIcon/>

        //             </IconButton>
        //         </NavLink>

        //         <Typography variant="h4" style={style}>
        //             UBD
        //         </Typography>


        //         <IconButton color="inherit" aria-label="Menu" style={{marginBottom: '12px'}}
        //                     onClick={onClickHandler}>
        //             <MeetingRoomIcon/>
        //         </IconButton>
        //     </Toolbar>
        // </AppBar>


        <Layout className="layout">
            <Header>
                <Button type="default" shape="circle"> 버튼 </Button>
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </Header>

        </Layout>


    );
}


// const style = {
//     flexGrow: 1,
//     marginBottom: '12px'
// }

// const Main_Nav = {
//     position: "absolute",
//     // border: '1px solid black',
//     height: '50px'
// }


export default withRouter(NavBar);