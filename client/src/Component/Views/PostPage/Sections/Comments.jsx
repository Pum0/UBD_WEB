import { Button, TextField, TableCell, TableRow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Comments(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const postId = props.post_id

    const [CommentValue, setCommentValue] = useState("")


    const onCommentHandler = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const variables = {
            content: CommentValue,
            writer: user.userData._id,
            postId: props.postId
        }

        Axios.post('/api/comments/writeComment', variables)
            .then(response => {
                if (response.data.writeCommentSuccess) {
                    console.log(response.data.result)

                } else {
                    alert('Failed to save Comment')
                }
            })

    }




    return (
        <TableRow >{/* Comment Lists */}
            {/*<SingleComment />*/}
            <TableCell colSpan={3} style={{ padding:5, margin: 5}}>
                {/* Root Comment Form */}
                <form onSubmit={onSubmitHandler}>

                    <TextField type="text" placeholder="댓글을 입력하세요."
                        fullWidth margin="normal" value={CommentValue} onChange={onCommentHandler}
                        style={{ rowGap: "3" }} />
                    <Button type="submit" size="medium " variant="contained" edge="start" color="default"
                        style={{ left:"80%" ,margin: 10, textAlign: "center" }}>

                        <Typography variant="button">입력</Typography>

                    </Button>

                </form>
            </TableCell>
        </TableRow>        

    )

}

export default Comments;