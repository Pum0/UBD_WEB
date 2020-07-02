import React, {Component, useState, useEffect} from "react";
import {NavLink, withRouter, useParams} from "react-router-dom";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function BoardList(props) {
    var Board = [];


    for (var i = 0; i < Board.length; i++) {
        var title = [];

        title.push()

        var Writer = [];

        Writer.push()






        Board.push(
            <tr  style={{border: "1px solid black"}}>
                <td>{title[i]}</td>
                <td>{Writer[i]}</td>
                <td>{Date.now()}</td>
                <td>0</td>
            </tr>
        )
    }

    var params = useParams();
    var Board_id = params.Board_id;

    console.log('params', params, params.Board_id);

    const [BoardTitle, setBoardTitle] = useState("")
    const [BoardWriter, setBoardWriter] = useState("")
    const [CreationDate, setCreationDate] = useState("")
    const [ViewCount, setViewCount] = useState("")


    return (
        <div style={Board_style}>

            <table style={{border: "1px solid black", width: "100%"}}>
                <thead style={{border: "1px solid black"}}>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {Board}
                </tbody>

            </table>

            <NavLink to="/Home/board/BoardWritePage">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin:5}}>
                    <Typography variant="subtitle2">글쓰기</Typography>
                </Button>
            </NavLink>
        </div>
    );

}

const Board_style = {
    border: '1px solid black',
    margin: 10,
    padding: 0,
    top: "50px",
    position: "absolute",
    left: 0, height: "92%",
    width: "96%",
    backgroundColor: "pink",
    zIndex: 451
}


export default withRouter(BoardList);