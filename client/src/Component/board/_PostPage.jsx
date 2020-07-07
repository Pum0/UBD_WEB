import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, withRouter} from "react-router-dom";
import {
    TextField,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import moment from "moment";


function _PostPage(props) {
    const post_id = props.match.params.post_id
    const [postPage, setPost] = useState([])
    const [comment, setComment] = useState("")

    const onCommentHandler = (e) => {
        setComment(e.currentTarget.value)
    }

    // const [CommentLists, setCommentLists] = useState([])

    const postVariable = {
        post_id: post_id
    }


    useEffect(() => {
        axios.post('/api/posts/getPost', postVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setPost(response.data.post)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])

    if (postPage.writer) {
        return (


            <div style={Board_style}>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{postPage.title}</TableCell>
                                <TableCell>{moment(postPage.created).format("MM.DD HH:mm")}</TableCell>
                                <TableCell>{postPage.writer.name}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{postPage.content}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <form>
                    <TextField type="text" placeholder="댓글을 입력하세요."
                               fullWidth margin="normal" value={comment} onChange={onCommentHandler}
                               style={{width: "83%"}}/>
                    <Button type="submit" size="medium " variant="contained" edge="start" color="default"
                            style={{margin: 10, textAlign: "center"}}>
                        <Typography variant="button">입력</Typography>
                    </Button>
                </form>

                <NavLink to="/Home/board/BoardList">
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                        <Typography variant="subtitle2">뒤로가기</Typography>
                    </Button>
                </NavLink>

                <NavLink to="/Home/board/BoardUpdatePage">
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                        <Typography variant="subtitle2">수정</Typography>
                    </Button>
                </NavLink>


                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                    <Typography variant="subtitle2">삭제</Typography>
                </Button>

            </div>
        )
    } else {
        return (
            <div> Loading... </div>
        )
    }
}


const Board_style = {
    margin: 10,
    padding: 0,
    top: "50px",
    position: "absolute",
    left: 0, height: "92%",
    width: "96%",
    zIndex: 451
}
export default withRouter(_PostPage);