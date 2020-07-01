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

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();  //page가 새로고침되는걸 막아줌

        if (Password !== ConfirmPassword) {
            return alert("비밀번호가 일치하지 않습니다.")
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
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
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                  onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button type="submit">
                    SIGN-UP
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)

// function AddUserComponent(props) {
//     const dispatch = useDispatch();
//
//     const [user_id, setUse_id] = useState("")
//     const [pwd, setPwd] = useState("")
//     const [confPwd, setConfPwd] = useState("")
//     const [Name, setName] = useState("")
//     const [birth, setBirth] = useState("")
//     const [weight, setWeight] = useState("")
//
//     const onUser_IdHandler = (event) => {
//         setUse_id(event.currentTarget.value)
//     }
//     const onPasswordHandler = (event) => {
//         setPwd(event.currentTarget.value)
//     }
//
//
//     const onConfirmPasswordHandler = (event) => {
//         setConfPwd(event.currentTarget.value)
//     }
//
//     const onNameHandler = (event) => {
//         setName(event.currentTarget.value)
//     }
//     const onBirthDayHandler = (event) => {
//         setBirth(event.currentTarget.value)
//     }
//     const onWeightHandler = (event) => {
//         setWeight(event.currentTarget.value)
//     }
//
//     const onSubmitHandler = (event) => {
//         event.preventDefault();  //page가 새로고침되는걸 막아줌
//
//         if (pwd !== confPwd) {
//             return alert("비밀번호가 일치하지 않습니다.")
//         }
//
//         let body = {
//             email: user_id,
//
//             name: fullName,
//             password: pwd
//         }
//
//         dispatch(registerUser(body))
//             .then(response => {
//                 if (response.payload.success) {
//                     props.history.push("/login")
//                 } else {
//                     alert('회원가입 실패')
//                 }
//             })
//     }
//
//     return (
//
//         <div>
//             <Container>
//                 <Typography variant="h4" style={style}>UBD 회원 가입</Typography>
//
//                 <form style={formContainer} onClick={onSubmitHandler}>
//                     {/*아이디 입력 필드*/}
//                     <TextField type="email" placeholder="아이디를 입력해주세요." name="id_name"
//                                fullWidth margin="normal" value={user_id} onChange={onUser_IdHandler}/>
//
//                     <TextField type="password" placeholder="비밀번호를 입력해주세요." name="pwd"
//                                fullWidth margin="normal" value={pwd} onChange={onPasswordHandler}/>
//
//                     <TextField type="password" placeholder="비밀번호를 입력해주세요." name="confPwd"
//                                fullWidth margin="normal" value={confPwd} onChange={onConfirmPasswordHandler}/>
//
//                     <TextField placeholder="이름을 입력해주세요." name="fullname"
//                                fullWidth margin="normal" value={XName} onChange={onNameHandler}/>
//
//                     <TextField placeholder="생년월일을 입력해주세요. ex)2020-01-01" name="birth"
//                                fullWidth margin="normal" value={birth} onChange={onBirthDayHandler}/>
//
//                     <TextField type="number" placeholder="체중을 입력해주세요." name="weight"
//                                fullWidth margin="normal" value={weight} onChange={onWeightHandler}/>
//
//
//                     {/*회원정보를 저장하며 디비에 등록 하는버튼*/}
//                     <Button variant="contained" type="submit" color="inherit">회원가입</Button>
//                 </form>
//
//             </Container>
//         </div>
//     );
//
// }
//
//
// const formContainer = {
//     display: 'flex',
//     flexFlow: 'row wrap'
// }
//
// const style = {
//     display: 'flex',
//     justifyContent: 'center'
// }

// export default AddUserComponent;