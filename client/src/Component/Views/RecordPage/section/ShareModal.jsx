import React, { Component, useState, useEffect } from "react";
import { Modal, Button } from 'antd';


function ShareModal(props) {

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

    return (

        <Modal
            visible={visible}
            title="공유하기"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Return
            </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Submit
            </Button>,
            ]}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>

    );


}

export default ShareModal;