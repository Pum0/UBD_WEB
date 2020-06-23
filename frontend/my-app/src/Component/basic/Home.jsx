import React, {Component} from "react";
import MapAPI from "./MapAPI";
import NavBar from "./NavBar";


class Home extends Component {

    render() {
        return (
            <div style={style}>
                <NavBar></NavBar>
                <MapAPI></MapAPI>

            </div>
        );

    }
}
const style= {
    display:"absolute",
    width:"100%",
    height:"100%"
}

export default Home;