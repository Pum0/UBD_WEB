import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Button } from "antd";
import { Container, Paper, Typography, TextField } from "@material-ui/core";
import axios from "axios";


function ModifyPage() {

    const user = useSelector(state => state.user);

    const [User, setUser] = useState([])

    useEffect(() => {

        const user_id = {
            user_id: user.userData._id
        }


        axios.get('/api/users/getUser', user_id)
            .then(response => {
                if (response.data.getUserSuccess) {
                    console.log(response.data.user)
                    setUser(response.data.user)
                } else {
                    alert('')
                }
            })


    }, [])

    // Style
    const formContainer = {
        display: 'flex',
        flexFlow: 'row wrap'
    }

    const style = {
        display: 'flex',
        justifyContent: 'center'
    }

    const onClickHandler = () => {
        console.log(User)
    }

    const onSubmitHandler = () => {
    }


    return (
        <>
            <Button onClick={onClickHandler}> 콘솔로그 </Button>

            <Container style={{ marginTop: 100, width: "500px", padding: 20 }} component={Paper}>
                
                <Typography variant="h4" style={style}> 프로필 수정</Typography>
                <Typography variant="subtitle2">
                    <form style={formContainer} onSubmit={onSubmitHandler}>

                        <TextField type="password" placeholder="변경 할 비밀번호를 입력해주세요."
                            fullWidth margin="normal" value="" onChange="" />

                        <TextField type="password" placeholder="비밀번호를 다시 입력해주세요."
                            fullWidth margin="normal" value="" onChange="" />

                        <TextField type="number" placeholder="체중을 입력해주세요."
                            fullWidth margin="normal" value="" onChange="" />


                        <Button variant="contained" type="submit" color="inherit">회원수정</Button>
                        <NavLink to="/">
                            <Button variant="contained" type="Button" color="inherit" style={{ left: "10px" }}>돌아가기  </Button>
                        </NavLink>

                    </form>
                </Typography>
            </Container>
        </>
    )

}

export default withRouter(ModifyPage);