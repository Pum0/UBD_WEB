import React, {Component, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import {registerUser} from "../../_actions/user_action";
import {useDispatch} from "react-redux";
import Axios from 'axios';
import {withRouter} from "react-router-dom";

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setUse_id] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [Name, setName] = useState("")
    const [Birth, setBirth] = useState("")
    const [Weight, setWeight] = useState("")

    const onUser_IdHandler = (event) => {
        setUse_id(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onBirthDayHandler = (event) => {
        setBirth(event.currentTarget.value)
    }
    const onWeightHandler = (event) => {
        setWeight(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();  //page가 새로고침되는걸 막아줌

        if (Password !== ConfirmPassword) {
            return alert("비밀번호가 일치하지 않습니다.")
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
            birth: Birth,
            weight: Weight
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/")
                } else {
                    alert('회원가입 실패')
                }
            })
    }

    return (

        <div>
            <Container>
                <Typography variant="h4" style={style}>UBD 회원 가입</Typography>

                <form style={formContainer} onSubmit={onSubmitHandler}>
                    {/*아이디 입력 필드*/}
                    <TextField type="email" placeholder="아이디를 입력해주세요."
                               fullWidth margin="normal" value={Email} onChange={onUser_IdHandler}/>

                    <TextField type="password" placeholder="비밀번호를 입력해주세요."
                               fullWidth margin="normal" value={Password} onChange={onPasswordHandler}/>

                    <TextField type="password" placeholder="비밀번호를 입력해주세요."
                               fullWidth margin="normal" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                    <TextField type="text" placeholder="이름을 입력해주세요."
                               fullWidth margin="normal" value={Name} onChange={onNameHandler}/>

                    <TextField placeholder="생년월일을 입력해주세요. ex)20200101"
                               fullWidth margin="normal" value={Birth} onChange={onBirthDayHandler}/>

                    <TextField type="number" placeholder="체중을 입력해주세요."
                               fullWidth margin="normal" value={Weight} onChange={onWeightHandler}/>


                    {/*회원정보를 저장하며 디비에 등록 하는버튼*/}
                    <Button variant="contained" type="submit" color="inherit">회원가입</Button>
                </form>

            </Container>
        </div>
    );

}


const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default withRouter(RegisterPage);