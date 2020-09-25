import React, { useState } from "react";
import Axios from "axios";
import { Comment, Avatar, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Comments from "./Comments"
import {getComment} from "../../../../_actions/comment_action";
import {writeComment} from "../../../../_actions/comment_action"
import {deleteComment} from "../../../../_actions/comment_action"
import LikeDisLikes from "./LikeDislikes"


function SingleComment(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const CommentId = props.comment._id;

    const [OpenReply, setOpenReply] = useState(false)
    const [CommentValue, setCommentValue] = useState("")

    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }

    const onHandleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const variables = {
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id,
            content: CommentValue

        }

        // Axios.post('/api/comments/writeComment', variables)
        //     .then(response => {
        //         if (response.data.writeCommentSuccess) {
        //             console.log(response.data.result)
        //             setCommentValue("")
        //             setOpenReply(false)
        //             props.UpdateComment(response.data.result)
        //         } else {
        //             alert('Failed to save Comment')
        //         }
        //     })

        dispatch(writeComment(variables))
        .then(response => {
            if (response.payload.writeCommentSuccess) {
                console.log(response.payload.result)
                setCommentValue("")
                setOpenReply(false)
                props.UpdateComment(response.payload.result)
            } else {
                alert('Failed to save Comment')
            }
        })

    }

    const onClickDelete = (e) => {
        e.preventDefault();

        const commentId = {
            commentId: CommentId
        }
        console.log(commentId)
        props.RemoveComment(commentId)

        dispatch(deleteComment(commentId))
        .then(response => {
            if(response.payload.delComment){
            // props.RemoveComment(commentId)
            } else {
                alert('실패')
            }
        })

        // 댓글 삭제
        // Axios.post('/api/comments/deleteComment', commentId)
        //     .then(response => {
        //         if (response.data.deleteCommentSuccess) {
        //             // console.log(response.data.delComment._id)
        //             props.RemoveComment(response.data.delComment._id)

        //         } else {
        //             alert('Failed to delete Comment')
        //         }
        //     })
    }



    const actions = [
        <LikeDisLikes userId ={user.userData._id} commentId ={props.comment._id}/>
        ,
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to">  Reply to</span>
        ,
        <IconButton edge="start" color="inherit" aria-label="del_comment" onClick={onClickDelete}
            style={{ padding: 0, margin: 0 }}>
            <ClearIcon />
        </IconButton>
    ]

    if (props.comment.writer)
        return (
            <div>
                <Comment
                    actions={actions}
                    author={props.comment.writer.name}
                    avatar={<Avatar src alt />}
                    content={<p> {props.comment.content} </p>}

                >  </Comment>

                {OpenReply &&
                    <form style={{ display: 'flex' }} onSubmit={onSubmitHandler}>
                        <textarea
                            style={{ width: '100%', borderRadius: '5px' }}
                            onChange={onHandleChange}
                            value={CommentValue}
                            placeholder="댓글을 작성해 주세요"

                        />
                        <br />
                        <button style={{ witdh: '20%', height: '52px' }} type="submit" > Submit </button>
                    </form>
                }

            </div>
        );

}


export default SingleComment; 