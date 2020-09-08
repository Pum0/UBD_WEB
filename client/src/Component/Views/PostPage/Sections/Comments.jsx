import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

function Comments(props) {
    const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [CommentNumber, setCommentNumber] = useState(0)

    useEffect(() => {

        let commentNumber = 0;

        props.commentLists.map((comment) => {
            if (comment.postId === props.postId) {
                commentNumber++
            }

        })
        setCommentNumber(commentNumber)
    }, [props.commentLists])

    const handleClick = (e) => {
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
                    setCommentValue("")
                    props.UpdateComment(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })

    }




    return (
        <div>
            <br />
            <p> {CommentNumber} 댓글 </p>
            <hr />

            {/* Comment Lists */}

            {props.commentLists && props.commentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment key={comment._id}>
                        <SingleComment UpdateComment={props.UpdateComment} comment={comment} postId={props.postId} UpdateComment2={props.UpdateComment2} />
                        <ReplyComment UpdateComment={props.UpdateComment} parentCommentId={comment._id} commentLists={props.commentLists} postId={props.postId} UpdateComment2={props.UpdateComment2} />
                    </React.Fragment>
                )

            ))}


            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmitHandler}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={CommentValue}
                    placeholder="댓글을 작성해 주세요"

                />
                <br />
                <button style={{ witdh: '20%', height: '52px' }} onClick={onSubmitHandler} > Submit </button>
            </form>
        </div>
    )

}

export default Comments;