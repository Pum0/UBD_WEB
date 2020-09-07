import React, { useState } from "react";
import Axios from "axios";
import { Comment, Avatar, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

function SingleComment(props) {
    const user = useSelector(state => state.user);

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
            content: CommentValue,
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id
        }

        Axios.post('/api/comments/writeComment', variables)
            .then(response => {
                if (response.data.writeCommentSuccess) {
                    console.log(response.data.result)
                    setCommentValue("")
                    setOpenReply(false)
                    props.UpdateComment(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })

    }

    const onClickDelete = (e) => {
        e.preventDefault();

        const variables = {
            content: CommentValue,
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id
        }

        // 댓글 삭제
        Axios.post('/api/comments/deleteComment', variables)
            .then(response => {
                if (response.data.deleteCommentSuccess) {
                    console.log(response.data.result)
                    props.UpdateComment(response.data.result)
                } else {
                    alert('Failed to delete Comment')
                }
            })
    }



    const actions = [
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to"> Reply to</span>
        
    ]
    const Delbutton = [
        <IconButton edge="start" color="inherit" aria-label="del_comment" onClick={onClickDelete}
            style={{ padding: 0, margin: 0 }}>
            <ClearIcon />
        </IconButton>
    ]

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
                    <button style={{ witdh: '20%', height: '52px' }} onClick={onSubmitHandler} > Submit </button>
                </form>
            }

        </div>
    );

}


export default SingleComment; 