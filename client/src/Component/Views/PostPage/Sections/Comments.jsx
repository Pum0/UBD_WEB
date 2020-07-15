import React, {useState} from "react"
import {Button, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {writePost} from "../../../../_actions/user_action";
import SingleComment from "./SingleComment";

function Comments(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const postId = props.post_id

    const onChangeHandler = (e) => {

    }
    const [CommentValue, setCommentValue] = useState("")


    const onCommentHandler = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }

        Axios.post('/api/comments/writeComment', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.result)


                } else {
                    alert('Failed to save Comment')
                }
            })

    }

    return (
        <div>

            {/* Comment Lists */}
            <SingleComment />

            {/* Root Comment Form */}
            <form onSubmit={onSubmitHandler}>

                <TextField type="text" placeholder="댓글을 입력하세요."
                           fullWidth margin="normal" value={CommentValue} onChange={onCommentHandler}
                           style={{width: "83%"}}/>
                <Button type="submit" size="medium " variant="contained" edge="start" color="default"
                        style={{margin: 10, textAlign: "center"}}>

                    <Typography variant="button">입력</Typography>

                </Button>

            </form>
        </div>
    )

}

export default Comments;