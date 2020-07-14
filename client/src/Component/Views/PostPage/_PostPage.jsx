import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Auth from "../../../hoc/auth";
import PostUpdatePage from "./PostUpdatePage";
import {deletePost} from "../../../_actions/user_action";
import {useDispatch} from "react-redux";
import Comments from "./Sections/Comments";

function _PostPage(props) {
    const dispatch = useDispatch();


    const post_id = props.match.params.post_id
    const [Post, setPost] = useState([])

    // 삭제버튼 클릭 시 Modal이 열릴 수 있도록 기본 값을 false로 지정한 스테이트
    const [open, setOpen] = useState(false);


    // 댓글 부분
    const [Coments, setComents] = useState([])


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
                    alert('')
                }
            })
    }, [])



    const onDeleteHandler = (event) => {


        event.preventDefault();
        let body = {
            post_id: post_id
        }


        dispatch(deletePost(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/Home/board/BoardList")
                } else {
                    alert('저장실패')
                }
            })
    }


    if (Post.writer) {
        return (


            <div>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width:"60%"}}>{Post.title}</TableCell>
                                <TableCell>{moment(Post.created).format("YY.MM.DD HH:mm분")}</TableCell>
                                <TableCell>{Post.writer.name}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{Post.content}</TableCell>
                            </TableRow>
                               {Post.images[0] !== "" &&
                            <div>
                                <img src={`http://localhost:5000/${Post.images[0]}`} alt="image"
                                     style={{width: "100%", border: "1px solid black"}}/>
                            </div>
                            }
                        </TableBody>


                        <TableCell><Comments postId={post_id} /></TableCell>

                    </Table>
                </TableContainer>




                {/*뒤로가기버튼*/}
                <NavLink to="/Home/board/BoardList">
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                        <Typography variant="subtitle2">뒤로가기</Typography>
                    </Button>
                </NavLink>

                {/*수정버튼*/}
                <NavLink to={`/Home/board/${Post._id}/PostUpdatePage`}>
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                        <Typography variant="subtitle2">수정</Typography>
                    </Button>
                </NavLink>

                {/*삭제버튼*/}
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}
                        onClick={onDeleteHandler}>
                    <Typography variant="subtitle2">삭제</Typography>
                </Button>


                {/*글 수정 페이지로 라우팅*/}
                <Switch>
                    <Route path="/Home/board/:post_id/PostUpdatePage" component={Auth(PostUpdatePage, true)}/>
                </Switch>
            </div>
        )
    } else {
        return (
            <div> Loading... </div>
        )
    }
}


export default withRouter(_PostPage);