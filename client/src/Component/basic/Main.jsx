import React, {Component} from "react";
import main_picture from "../../img/UBD_Login_Img.jpg"
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";
import LoginTab from "./LoginTab";
import Container from "@material-ui/core/Container";

class Main extends Component {


    render() {
        return (
            <div>
                <img src={main_picture} alt="Logo" style={img_size}/>
                <Container style={login_tab}>
                    <LoginTab></LoginTab>
                </Container>
            </div>
        );
    }


}

const login_tab = {
    width: "500px",
    height: "350px",
    position: "absolute",
    zindex:99,
    left:"36%",
    top:"65%"
}

const img_size = {
    width: "100%",
    height:"100%",
    position: "absolute"
}


export default Main;