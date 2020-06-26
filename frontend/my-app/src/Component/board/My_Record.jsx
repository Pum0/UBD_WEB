import React, {Component} from "react";


class My_Record extends Component {

    render() {
        return (
            <div style={Board_style}>

                <h2> My Record</h2>
                나의 기록
            </div>
        );


    }
}

const Board_style = {
    border: '1px solid black',
    margin:0,
    padding:0,
    top: "50px",
    position: "absolute",
    left: 0, height: "95%",
    width: "100%",
    backgroundColor: "powderblue",
    zIndex: 451
}

export default My_Record;
