import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Auth from "../../../hoc/auth";
import PostUpdatePage from "./PostUpdatePage";
import {deletePost} from "../../../_actions/post_action";
import {useDispatch} from "react-redux";
import Comments from "./Sections/Comments";
import ClearIcon from "@material-ui/icons/Clear"
import IconButton from "@material-ui/core/IconButton";
import {deleteComment} from "../../../_actions/comment_action"

function _PostPage(props) {


    const dispatch = useDispatch();

    // const comment_id = props.match.params.comment_id
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

        axios.get('/api/comments/getComments')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.comments)
                    setComents(response.data.comments)
                } else {
                    console.log('댓글을 불러오는데 실패했습니다.')
                }
            })


    }, [])

    // // 댓글을 삭제하는 기능
    // const onDeleteCommentHandler = (event) => {
    //     event.preventDefault();
    //     let comid = comment_id
    //     let body = {
    //         comment_id: comid
    //     }
    //
    //
    //     dispatch(deleteComment(body))
    //         .then(response => {
    //             if (response.payload.success) {
    //                 console.log(Coments)
    //                 console.log(comid)
    //             } else {
    //                 alert('삭제실패')
    //             }
    //         })
    // }




    const randerComments = Coments.map((comment, index) => {
        if (post_id === comment.postId)
            return (
                <TableRow>

                    <TableCell style={{width: "15%", padding: 0}}>{comment.writer.name}
                    </TableCell>
                    <TableCell> {comment.content}
                    </TableCell>
                    <TableCell>
                        <IconButton edge="start" color="inherit" aria-label="del_comment"
                        >
                            <ClearIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
    })


    // 이 글을 삭제하는 기능
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
                    alert('삭제실패')
                }
            })
    }


    if (Post.writer) {
        return (


            <div style={Board_style}>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableCell>{Post.title}</TableCell>
                            <TableCell>{moment(Post.created).format("MM.DD HH:mm")}</TableCell>
                            <TableCell>{Post.writer.name}</TableCell>
                        </TableHead>
                        <TableBody>
                            {/* 게시글의 내용 */}
                            {Post.content}
                            {/* 업로드 한 사진이 보여지는 부분 */}
                            {Post.images[0] !== "" &&
                            <img src={`http://localhost:5000/${Post.images[0]}`} alt="image"
                                 style={{width: "100%", border: "1px solid black"}}/>
                            }


                        </TableBody>

                        <TableFooter>
                            {/* 댓글 입력 칸 */}
                            <TableCell><Comments postId={post_id}/></TableCell>

                            {/* 게시글 안의 댓글 리스트 */}
                            {randerComments}
                        </TableFooter>


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
