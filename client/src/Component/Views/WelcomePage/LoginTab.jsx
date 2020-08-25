import { Face, Fingerprint } from '@material-ui/icons';
import { Grid, Paper, TextField } from "@material-ui/core"
import React, { Component, useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter, NavLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import {UserAddOutlnied} from "@ant-design/icons/UserAddOutlined";


import { Form, Input, Button, Checkbox } from 'antd';

function LoginTab(props) {

    // style 
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const headerStyle = {
        margin: "0 auto",
        textAlign: "center",
        height: "300px",
        fontSize:"38pt"
    }

    const formStyle = {
        margin: "0 auto", width: "380px",
        marginTop: "40 40%"
    }
    // style

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();  //page가 새로고침되는걸 막아줌

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/Home')

                } else {
                    alert('로그인 실패')
                }
            })
    }



    return (
        <div>
            <header style={headerStyle}></header>
            <body style={formStyle}>

                <form onSubmit={onSubmitHandler}>
                    <Form.Item required
                        label="Username"
                        name="username"
                        htmlType="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={onEmailHandler} value={Email} />
                    </Form.Item>

                    <Form.Item required
                        label="Password"
                        name="password"
                        htmlType="password"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={onPasswordHandler} value={Password} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <NavLink to="/signup"> ※ 회원가입 </NavLink>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="default" htmlType="submit">
                            로그인
                        </Button>
                    </Form.Item>
                </form>

            </body>
        </div>
    );
}

// function LoginTab(props) {
//     const dispatch = useDispatch();

//     const [Email, setEmail] = useState("")
//     const [Password, setPassword] = useState("")

//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value)
//     }

//     const onPasswordHandler = (event) => {
//         setPassword(event.currentTarget.value)
//     }

//     const onSubmitHandler = (event) => {
//         event.preventDefault();  //page가 새로고침되는걸 막아줌

//         let body = {
//             email: Email,
//             password: Password
//         }

//         dispatch(loginUser(body))
//             .then(response => {
//                 if (response.payload.loginSuccess) {
//                     props.history.push('/Home')

//                 } else {
//                     alert('로그인 실패')
//                 }
//             })
//     }


//     return (
//         <Paper variant="outlined" square style={{padding: 20}}>
//             <div style={{width:"360px",margin: 15}}>
//                 <form
//                     onSubmit={onSubmitHandler}
//                 >
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Face/>
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField label="Email" type="email" fullWidth autoFocus required
//                                        value={Email} onChange={onEmailHandler}/>
//                         </Grid>
//                     </Grid>
//                     <Grid container spacing={8} alignItems="flex-end">
//                         <Grid item>
//                             <Fingerprint/>
//                         </Grid>
//                         <Grid item md={true} sm={true} xs={true}>
//                             <TextField label="Password" type="password" fullWidth required
//                                        value={Password} onChange={onPasswordHandler}/>
//                         </Grid>
//                     </Grid>

//                     <Grid container justify="center" style={{marginTop: '10px'}}>
//                         <Button type="submit" variant="outlined" color="primary"
//                                 style={{textTransform: "none", marginTop: 20, marginRight: 70}}>
//                             <Typography variant="subtitle2"> Login </Typography>
//                         </Button>

//                         <Button variant="outlined" color="primary"
//                                 style={{textTransform: "none", marginTop: 20}}>
//                             <NavLink to="/signup"> <Typography variant="subtitle2"> Sign up </Typography> </NavLink>
//                         </Button>
//                     </Grid>
//                 </form>
//             </div>
//         </Paper>
//     );

// }


export default withRouter(LoginTab)
