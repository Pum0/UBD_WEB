import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import {getComment} from "../../../../_actions/comment_action";
import {writeComment} from "../../../../_actions/comment_action"


function Comments(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [Comment, setComment] = useState("")
    const [CommentNumber, setCommentNumber] = useState(0)
    let commentNumber = 0;

    useEffect(() => {

        // let commentNumber = 0;

        props.CommentLists.map((comment) => {
            if (comment.postId === props.postId) {
                commentNumber++
            }
            

        })
        setCommentNumber(commentNumber)
    }, [props.CommentLists])

    const handleClick = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }

        // Axios.post('/api/comments/writeComment', variables)
        //     .then(response => {
        //         if (response.data.writeCommentSuccess) {
        //             console.log(response.data.result)
        //             setComment("")
        //             props.UpdateComment(response.data.result)
        //         } else {
        //             alert('Failed to save Comment')
        //         }
        //     })

        dispatch(writeComment(variables))
        .then(response => {
            if(response.payload.writeCommentSuccess) {
                console.log(response.payload.result)
                setComment("")
                props.UpdateComment(response.payload.result)
            } else {
                alert('Failed to save Comment')
            }
        })

          

    }

    const Test = (e) =>  {
        console.log(Comment)
    }


    return (
        <div>
            <br />
            <p> {CommentNumber} 댓글 </p>
            <button onClick ={Test}> 테스트 </button>
            <hr />

            {/* Comment Lists */}

            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment key={comment._id}>
                        <SingleComment UpdateComment={props.UpdateComment} comment={comment} postId={props.postId} RemoveComment={props.RemoveComment} />
                        <ReplyComment UpdateComment={props.UpdateComment} parentCommentId={comment._id} CommentLists={props.CommentLists} postId={props.postId} RemoveComment={props.RemoveComment} />
                    </React.Fragment>
                )

            ))}


            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmitHandler}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={Comment}
                    placeholder="댓글을 작성해 주세요"

                />
                <br />
                <button style={{ witdh: '20%', height: '52px' }} onClick={onSubmitHandler} > Submit </button>
                
            </form>
        </div>
    )

}

export default Comments;