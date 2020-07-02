import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import {withRouter, NavLink} from "react-router-dom";
import Input from "reactstrap/es/Input";
import {useDispatch, useSelector} from "react-redux";
import {writePost} from "../../_actions/user_action";
=======
import { withRouter, NavLink } from "react-router-dom";
import Input from "reactstrap/es/Input";
import { useDispatch, useSelector } from "react-redux";
import { writePost } from "../../_actions/user_action";
>>>>>>> acec5a70a4f3be43c9288ca9b7e44af8efb48750


function BoardWritePage(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const [BoardName, setBoardName] = useState("")
    const [BoardContent, setBoardContent] = useState("")

    const onBoardNameHandler = (event) => {
        setBoardName(event.currentTarget.value)
    }
    const onBoardContentHandler = (event) => {
        setBoardContent(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {


        event.preventDefault();
        let body = {
            writer: user.userData._id,
            title: BoardName,
            content: BoardContent,
        }

        dispatch(writePost(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/Home/board/BoardList")
                } else {
                    alert('저장실패')
                }
            })

    }

    return (
        <div>
            <Container style={Board_style}>
                <Typography variant="h5" style={{ textAlign: "center" }}>자유게시판 글 쓰기</Typography>

                <form style={{ height: "96%" }} onSubmit={onSubmitHandler}>
                    <TextField variant="filled" label="제목" type="text" placeholder="글의 제목을 입력하세요."
                        fullWidth margin="normal" value={BoardName} onChange={onBoardNameHandler} />

                    <TextField
                        type="text"
                        variant="filled"
                        label="내용"
                        placeholder="글의 내용을 입력하세요."
                        multiline
                        value={BoardContent}
                        rows={15}
                        style={{ width: "100%" }}
                        onChange={onBoardContentHandler}
                    />

                    {/*<Input type="file" style={{margin: 5, textDecoration: "none"}}></Input> <br/>*/}
                    <Button variant="contained" type="submit" color="inherit" style={{ margin: 5 }}>글쓰기 </Button>
                    <Button variant="contained" type="button" color="inherit"
                        style={{ margin: 5, textDecoration: "none" }}> 뒤로가기 </Button>
                </form>
            </Container>
        </div>
    );
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
export default withRouter(BoardWritePage);