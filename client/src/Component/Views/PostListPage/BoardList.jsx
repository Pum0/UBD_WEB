import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import moment from "moment";

// import {POST_SERVER} from "../config";

function BoardList(props) {

    const [Posts, setPosts] = useState([])
    var BoardList = []
    var descendingOrder = [];


    useEffect(() => {
        axios.get('/api/Posts/getPosts')
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
        if(post.writer){
        BoardList.push(<TableBody>
            <TableRow>
                <TableCell>{post.seq} </TableCell>
                <TableCell component="th" scope="row"><NavLink to={`/Home/board/${post._id}`} key={`${post._id}`}><Typography
                    variant={"subtitle2"}>{post.title}</Typography></NavLink></TableCell>
                <TableCell align="right">{post.writer.name}</TableCell>
                <TableCell align="right">{moment(post.created).format("MM.DD")}</TableCell>
                <TableCell align="right" style={{textAlign: "center"}}>{post.viewcount}</TableCell>
            </TableRow>
        </TableBody>)
        }else{
            return(<div>
                Loading...
            </div>)
        }
    })
    for(var i = BoardList.length; i >=0; i--){
        descendingOrder.push(BoardList[i]);
    }

    return (
        <div style={Board_style}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell align="right">작성자</TableCell>
                            <TableCell align="right">작성일자</TableCell>
                            <TableCell align="right">조회수</TableCell>

                        </TableRow>
                    </TableHead>
                    {/*{renderTableRows}*/}
                    {descendingOrder}
                </Table>
            </TableContainer>

            <NavLink to="/Home/board/BoardWritePage">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                    <Typography variant="subtitle2">글쓰기</Typography>
                </Button>
            </NavLink>
            <NavLink to="/Home/board">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                    <Typography variant="subtitle2">뒤로가기</Typography>
                </Button>
            </NavLink>

        </div>
    );

}

const Board_style = {

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