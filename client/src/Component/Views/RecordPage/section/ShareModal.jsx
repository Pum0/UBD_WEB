import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from 'antd';
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import {saveSharePost} from "../../../../_actions/share_action";


function ShareModal(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible(false)
        }, 3000)
    }

    const handleCancel = () => {
        setVisible(false);
    }


    const [shareName, setShareName] = useState("")
    const [shareContent, setShareContent] = useState("")

    const onShareNameHandler = (event) => {
        setShareName(event.currentTarget.value)
    }
    const onShareContentHandler = (event) => {
        setShareContent(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            writer: user.userData._id,
            RideInfo: props._id,
            title: shareName,
            content: shareContent
        }

        dispatch(saveSharePost(body))
            .then(response => {
                if (response.payload.saveSharePostSuccess) {
                    // props.history.push("/Home")
                } else {
                    alert('저장실패')
                }
            })
    }





    return (
        <div>
            <Button onClick={showModal}>
                공유하기
            </Button>

            <Modal
                visible={visible}
                title="공유하기"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        닫기
                        </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={onSubmitHandler}>
                        공유
                        </Button>,]
                }
            >

                <form style={{ height: "96%" }} onSubmit={onSubmitHandler}>
                    <TextField variant="filled" label="제목" type="text" placeholder="글의 제목을 입력하세요."
                        fullWidth margin="normal" value={shareName} onChange={onShareNameHandler} />

                    <TextField
                        type="text"
                        variant="filled"
                        label="내용"
                        placeholder="글의 내용을 입력하세요."
                        multiline
                        value={shareContent}
                        rows={15}
                        style={{ width: "100%" }}
                        onChange={onShareContentHandler}
                    />
                </form>

            </Modal>
        </div>
    );


}

export default ShareModal;