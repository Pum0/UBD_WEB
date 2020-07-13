import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updatePost} from "../../../_actions/user_action";
import moment from "moment";
import axios from "axios";


function PostUpdatePage(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // 수정할 게시물의 내용을 불러오기 위해 사용
    const post_id = props.match.params.post_id
    const [PostContent, setPostContent] = useState([])

    const postVariable = {
        post_id: post_id
    }
    var [BoardName, setBoardName] = useState("")
    var [BoardContent, setBoardContent] = useState("")


    useEffect(() => {
        axios.post('/api/posts/getPost', postVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setPostContent(response.data.post)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])


    const onBoardNameHandler = (event) => {
        setBoardName(event.currentTarget.value)
    }
    const onBoardContentHandler = (event) => {
        setBoardContent(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {


        event.preventDefault();
        let body = {
            post_id: post_id,
            title: BoardName,
            content: BoardContent,
            created: moment()
        }


        dispatch(updatePost(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/Home/board/BoardList")
                } else {
                    alert('저장실패')
                }
            })
    }


    if (PostContent.writer) {

        return (

            <div>
                <Typography variant="h5">자유게시판 글 수정</Typography>

                <form onSubmit={onSubmitHandler}>
                    <TextField variant="filled" label="제목" type="text" placeholder="글의 제목을 입력하세요."
                               fullWidth margin="normal" value={BoardName} onChange={onBoardNameHandler}/>
                    <TextField
                        type="text"
                        variant="filled"
                        label="내용"
                        placeholder="글의 내용을 입력하세요."
                        multiline
                        value={BoardContent}
                        rows={15}
                        onChange={onBoardContentHandler}
                    />

                    <Button type="submit"  variant="contained" edge="start" color="inherit">
                        <Typography variant="subtitle2">수정하기</Typography>
                    </Button>

                    <NavLink to="/Home/board/BoardList">
                        <Button size="small" variant="contained" edge="start" color="inherit">
                            <Typography variant="subtitle2">뒤로가기</Typography>
                        </Button>
                    </NavLink>
                </form>
            </div>);
    } else {
        return (<div> loading... </div>
        )
    }

}


export default withRouter(PostUpdatePage);