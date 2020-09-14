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
import { useDispatch, useSelector, connectAdvanced } from "react-redux";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import Auth from "../../../hoc/auth";
import { deletePost } from "../../../_actions/post_action";
import BoardUpdatePage from "./BoardUpdatePage";
import Comments from "./Sections/Comments";
import SingleComment from "./Sections/SingleComment";

import { Drawer } from "antd";

function _PostPage(props) {


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    // const comment_id = props.match.params.comment_id
    const postId = props.match.params.postId

    const [Post, setPost] = useState([])

    // 삭제버튼 클릭 시 Modal이 열릴 수 있도록 기본 값을 false로 지정한 스테이트
    const [open, setOpen] = useState(false);


    // 댓글 부분
    const [CommentLists, setComment] = useState([])



    const postVariable = {
        postId: postId
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

        axios.post('/api/comments/getComments', postVariable)
            .then(response => {
                if (response.data.getCommentsSuccess) {
                    console.log(response.data.comments)
                    setComment(response.data.comments)
                } else {
                    console.log('댓글을 불러오는데 실패했습니다.')
                }
            })


    }, [])

    const UpdateComment = (newComment) => {
        setComment(CommentLists.concat(newComment))
    }


    const UpdateComment2 = (commentId) => {
        const findId = CommentLists.find(_id => commentId)
        console.log(CommentLists)
        console.log(CommentLists.findIndex(_id => _id === commentId))
        setComment(CommentLists.filter(comment => comment._id !== commentId))
    }

    const UpdatePost = (newPost) => {
        setPost(Post.concat(newPost))
    }

    const [visible, setVisible] = useState(true);


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);

    };

    const onCloseAfter = () => {
        props.history.push("/home");

    };

    // const randerComments = CommentLists.map((comment, index) => {
    //     if (postId === comment.postId)
    //         return (
    //             <TableRow style={{ margin: 0, padding: 0 }}>

    //                 <TableCell style={{ padding: 5, margin: 5 }}> {comment.content}
    //                 </TableCell>
    //                 <TableCell width={"5%"} style={{ padding: 0, margin: 0, textAlign: "center" }}>{comment.writer.name}
    //                 </TableCell>
    //                 <TableCell width={"2.5%"} style={{ padding: 0, margin: 0 }}>
    //                     <IconButton edge="start" color="inherit" aria-label="del_comment"
    //                         style={{ padding: 0, margin: 0 }}>
    //                         <ClearIcon />
    //                     </IconButton>
    //                 </TableCell>
    //             </TableRow>
    //         );
    // })


    // 이 글을 삭제하는 기능
    const onDeleteHandler = (e) => {
        e.preventDefault();

        const variables = {
            postId: postId
        }

        axios.post('/api/posts/deletePost', variables)
            .then(response => {
                if (response.data.deletePostSuccess) {
                    props.history.push("/Home/board/BoardList")
                } else {
                    alert('Failed to save CommentLists')
                }
            })
    }


    if (Post.writer) {
        return (
            <Drawer
                placement="left"
                closable={true}
                mask={false}
                maskClosable={false}
                onClose={onClose}
                visible={visible}
                width="650px"
            >

                <TableContainer component={Paper}>
                    <Table style={{ margin: 0, padding: 0 }}>
                        <TableHead>
                            <TableCell style={{ padding: 5, margin: 5 }}>{Post.title}</TableCell>
                            <TableCell width={"10%"} style={{ padding: 0, margin: 0 }}>{moment(Post.created).format("MM.DD HH:mm")}</TableCell>
                            <TableCell width={"10%"} style={{ padding: 0, margin: 0 }}>{Post.writer.name}</TableCell>
                        </TableHead>
                        <TableBody style={{ width: "100%" }}>
                            <TableRow>
                                <TableCell colSpan={3}>
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
                            <Comments UpdateComment={UpdateComment} CommentLists={CommentLists} postId={postId} UpdateComment2={UpdateComment2} />

                        </TableFooter>


                    </Table>
                </TableContainer>

                {/*수정버튼*/}
                {user.userData._id === Post.writer._id &&
                    <NavLink to={`/Home/${Post._id}/BoardUpdatePage`}>
                        <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}>
                            <Typography variant="subtitle2">수정</Typography>
                        </Button>
                    </NavLink>}


                {/*삭제버튼*/}
                {user.userData._id === Post.writer._id &&
                    < Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}
                        onClick={onDeleteHandler}>
                        <Typography variant="subtitle2">삭제</Typography>
                    </Button>
                }

                {/*글 수정 페이지로 라우팅*/}
                <Switch>
                    <Route path="/Home/:postId/BoardUpdatePage" component={Auth(BoardUpdatePage, true)} />
                </Switch>

            </Drawer >

        )
    } else {
        return (
            <div><LoadingOutlined /> </div>
        )
    }
}

export default withRouter(_PostPage);