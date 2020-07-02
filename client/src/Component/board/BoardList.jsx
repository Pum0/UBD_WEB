import React, {Component, useState, useEffect} from "react";
import {NavLink, withRouter, useParams} from "react-router-dom";
import {Button, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import moment from "moment";

// import {POST_SERVER} from "../config";

function BoardList() {
    // var Board = [];
    //
    // for (var i = 0; i < Board.length; i++) {
    //     var title = [];
    //
    //     title.push()
    //
    //     var Writer = [];
    //
    //     Writer.push()
    //
    //     Board.push(
    //         <tr  style={{border: "1px solid black"}}>
    //             <td>{title[i]}</td>
    //             <td>{Writer[i]}</td>
    //             <td>{Date.now()}</td>
    //             <td>0</td>
    //         </tr>
    //     )
    // }
    // var params = useParams();
    // var Board_id = params.Board_id;
    // const [BoardTitle, setBoardTitle] = useState("")
    // const [BoardWriter, setBoardWriter] = useState("")
    // const [CreationDate, setCreationDate] = useState("")
    // const [ViewCount, setViewCount] = useState("")

    const [Posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/api/posts/getPosts')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.posts)
                    setPosts(response.data.posts)
                } else {
                    alert('게시물을 불러오는데 실패했습니다.')
                }
            })
    }, [])


    const renderTableRows = Posts.map((post, index) => {


        return <div style={{margin: 5, position: 'relative', border: "1px soild black"}}>
            <Container>
            <Typography variant="subtitle2">
                <a href={`/Home/board/BoardList/${post._id}`}>
                <span style={{width:"5"}}>
                    {post.title}
                </span>


                </a>
                <span>{post.writer.name} </span>

                <span> {moment(post.created).format("MMM Do YYYY")} </span>
                <span style={{marginLeft: '3rem'}}> {post.viewcount}</span>
            </Typography>
            </Container>
        </div>


    })


    return (
        <div style={Board_style}>

            {renderTableRows}
            <NavLink to="/Home/board/BoardWritePage">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
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
    backgroundColor: "white",
    zIndex: 451
}


export default withRouter(BoardList);