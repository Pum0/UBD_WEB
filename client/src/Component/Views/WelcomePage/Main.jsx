import React, {Component} from "react";
import main_picture from "../../../img/UBD_Login_Img.jpg"
import LoginTab from "./LoginTab";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class Main extends Component {


    render() {
        return (
            <div>
                <Typography>
                <img src={main_picture} alt="Logo"/>
                <Container>
                    <LoginTab></LoginTab>
                </Container>
                </Typography>
            </div>
        );
    }


}



export default Main;