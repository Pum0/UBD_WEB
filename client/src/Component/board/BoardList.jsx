import React, {Component, useState, useEffect} from "react";
import {NavLink, withRouter, useParams} from "react-router-dom";
import {Button, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import moment from "moment";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

// import {POST_SERVER} from "../config";

function BoardList() {

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


        return <TableBody>
            <TableRow>
                <TableCell component="th" scope="row" ><a href={`/Home/board/BoardList/${post._id}`}> <Typography variant={"subtitle2"}>{post.title}</Typography></a></TableCell>
                <TableCell align="right">{post.writer.name}</TableCell>
                <TableCell align="right">{moment(post.created).format("MM.DD")}</TableCell>
                <TableCell align="right" style={{textAlign:"center"}}>{post.viewcount}</TableCell>
            </TableRow>
        </TableBody>
    })


    return (
        <div style={Board_style}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>제목</TableCell>
                            <TableCell align="right">작성자</TableCell>
                            <TableCell align="right">작성일자</TableCell>
                            <TableCell align="right">조회수</TableCell>

                        </TableRow>
                    </TableHead>
                    {renderTableRows}
                </Table>
            </TableContainer>

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