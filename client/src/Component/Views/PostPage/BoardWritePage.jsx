import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { writePost } from "../../../_actions/post_action";
import { Input } from "@material-ui/core";
import Dropzone, { useDropzone } from "react-dropzone";
import Axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import { Drawer } from "antd";


function BoardWritePage(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const [BoardName, setBoardName] = useState("")
    const [BoardContent, setBoardContent] = useState("")
    const [FilePath, setFilePath] = useState("")


    const [visible, setVisible] = useState(true);


    const onClose = () => {
        setVisible(false);
    };


    const showDrawer = () => {
        setVisible(true);
    };


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
            images: FilePath
        }

        dispatch(writePost(body))
            .then(response => {
                if (response.payload.writePostSuccess) {
                    props.history.push("/Home")
                } else {
                    alert('저장실패')
                }
            })

    } 

    const onDrop = (files) => {
        let formData = new FormData;
        ;
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])




        Axios.post('/api/posts/uploadfiles', formData, config)
            .then(response => {
                if (response.data.uploadfilesSuccess) {
                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }

                    console.log(response.data)
                    setFilePath(response.data.filePath)
                } else {
                    alert("이미지 업로드를 실패했습니다.")
                }

            })


    }

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
            <Typography>※ 이미지파일 추가 (확장자 png, jpg만 업로드 가능합니다.) </Typography>
            <Dropzone onDrop={onDrop}
                multiple={true}
                maxSize={8000000}
            >{({ getRootProps, getInputProps }) => (
                <div style={{
                    marginTop: 10,
                    margin: "0 auto",
                    width: '96%',
                    height: '100px',
                    border: '1px solid lightgray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <AddIcon style={{ fontSize: '3rem' }} />

                </div>
            )}
            </Dropzone>
            {FilePath !== "" &&
                <div>
                    미리보기<br />
                    <img src={`http://localhost:5000/${FilePath}`} alt="image" style={{ width: "50%", border: "1px solid black" }} />
                </div>
            }
            {/*<Input type="file" on style={{margin: 5, textDecoration: "none"}}></Input> <br/>*/} <br />
            <Button variant="contained" type="submit" color="inherit" style={{ margin: 5 }}>글쓰기 </Button>
            <Button variant="contained" type="button" color="inherit" style={{ margin: 5, textDecoration: "none" }} onClick={onClose}> 뒤로가기 </Button>
        </form>
        </Drawer>
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