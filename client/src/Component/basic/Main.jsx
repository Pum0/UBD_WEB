import React, {Component} from "react";
import main_picture from "../../img/UBD_Login_Img.jpg"
import LoginTab from "./LoginTab";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class Main extends Component {


    render() {
        return (
            <div>
                <Typography>
                <img src={main_picture} alt="Logo" style={img_size}/>
                <Container style={login_tab}>
                    <LoginTab></LoginTab>
                </Container>
                </Typography>
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