import { LoadingOutlined } from "@ant-design/icons";
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
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import axios from 'axios';
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import Auth from "../../../hoc/auth";
import { deletePost } from "../../../_actions/post_action";
import BoardUpdatePage from "./BoardUpdatePage";
import Comments from "./Sections/Comments";
import { Drawer } from "antd";

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
                if (response.data.getPostSuccess) {

                    console.log(response.data.post)
                    setPost(response.data.post)
                } else {
                    alert('')
                }
            })

        axios.get('/api/comments/getComments')
            .then(response => {
                if (response.data.getCommentsSuccess) {
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

    const [visible, setVisible] = useState(false);


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };



    const randerComments = Coments.map((comment, index) => {
        if (post_id === comment.postId)
            return (
                <TableRow style={{ margin: 0, padding: 0 }}>

                    <TableCell style={{ padding: 0, margin: 0 }}>{comment.writer.name}
                    </TableCell>
                    <TableCell style={{ padding: 0, margin: 0 }}> {comment.content}
                    </TableCell>
                    <TableCell style={{ padding: 0, margin: 0 }}>
                        <IconButton edge="start" color="inherit" aria-label="del_comment"
                        style={{padding: 0, margin:0 }}>
                            <ClearIcon />
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
                if (response.payload.deletePostSuccess) {
                    props.history.push("/Home/board/BoardList")
                } else {
                    alert('삭제실패')
                }
            })
    }


    if (Post.writer) {
        return (
            <Drawer
                placement="left"
                closable={false}
                mask={false}
                maskClosable={false}
                onClose={onClose}
                visible={true}
                width="650px"
            >

                <TableContainer component={Paper}>
                    <Table style={{ margin: 0, padding: 0 }}>
                        <TableHead>
                            <TableCell style={{padding: 0, margin:0 }}>{Post.title}</TableCell>
                            <TableCell style={{padding: 0, margin:0 }}>{moment(Post.created).format("MM.DD HH:mm")}</TableCell>
                            <TableCell style={{padding: 0, margin:0 }}>{Post.writer.name}</TableCell>
                        </TableHead>
                        <TableBody style={{ width: "100%" }}>
                            <TableRow>
                                <TableCell>
                                    {/* 게시글의 내용 */}
                                    {Post.content}
                                    {/* 업로드 한 사진이 보여지는 부분 */}
                                    {Post.images[0] !== "" &&
                                        <img src={`http://localhost:5000/${Post.images[0]}`} alt="image"
                                            style={{ width: "100%", border: "1px solid black" }} />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableFooter>
                            {/* 댓글 입력 칸 */}
                            <TableRow><Comments postId={post_id} /></TableRow>

                            {/* 게시글 안의 댓글 리스트 */}
                            {randerComments}
                        </TableFooter>


                    </Table>
                </TableContainer>


                {/*뒤로가기버튼*/}
                <NavLink to="/Home">
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}>
                        <Typography variant="subtitle2">뒤로가기</Typography>
                    </Button>
                </NavLink>

                {/*수정버튼*/}
                <NavLink to={`/Home/${Post._id}/BoardUpdatePage`}>
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}>
                        <Typography variant="subtitle2">수정</Typography>
                    </Button>
                </NavLink>

                {/*삭제버튼*/}
                <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}
                    onClick={onDeleteHandler}>
                    <Typography variant="subtitle2">삭제</Typography>
                </Button>


                {/*글 수정 페이지로 라우팅*/}
                <Switch>
                    <Route path="/Home/:post_id/BoardUpdatePage" component={Auth(BoardUpdatePage, true)} />
                </Switch>

            </Drawer>
        )
    } else {
        return (
            <div><LoadingOutlined /> </div>
        )
    }
}

export default withRouter(_PostPage);
