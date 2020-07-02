import React, {Component, useState} from "react";
import {NavLink, withRouter, useParams} from "react-router-dom";
import {Button} from "@material-ui/core";

function CommunityBoardList(props) {
    var Board = [];
    var BoardId = 1;

    for (var i = 0; i < 12; i++) {
        var title = ["메이플 하고싶다", "존나 자고싶다", "ㅇㅎ) 와.."];

        Board.push(
            <tr style={{border: "1px solid black"}}>
                <td>{title[i]}</td>
                <td>정진규</td>
                <td>2020-07-02</td>
                <td>0</td>
            </tr>
        )
    }



    var params = useParams();
    var Board_id = params.Board_id;

    console.log('params', params, params.Board_id);

    const [BoardNumber, setBoardNumber] = useState("0")
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

            <NavLink to="/Home/board/BoardWritePage"><Button>글쓰기</Button></NavLink>
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


export default withRouter(CommunityBoardList);