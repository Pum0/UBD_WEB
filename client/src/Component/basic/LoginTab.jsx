import {Paper, Grid, TextField, Button} from '@material-ui/core';
import {Face, Fingerprint} from '@material-ui/icons';
import React, {Component, useState} from 'react'
import Axios from 'axios'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../_actions/user_action';
import {withRouter, NavLink} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";


function LoginTab(props) {
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
        <Paper variant="outlined" square style={{padding: 20}}>
            <div style={{margin: 15}}>
                <form
                    onSubmit={onSubmitHandler}
                >
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField label="Email" type="email" fullWidth autoFocus required
                                       value={Email} onChange={onEmailHandler}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField label="Password" type="password" fullWidth required
                                       value={Password} onChange={onPasswordHandler}/>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" style={{marginTop: '10px'}}>
                        <Button type="submit" variant="outlined" color="primary"
                                style={{textTransform: "none", marginTop: 20, marginRight: 70}}>
                            <Typography variant="subtitle2"> Login </Typography>
                        </Button>

                        <Button variant="outlined" color="primary"
                                style={{textTransform: "none", marginTop: 20}}>
                            <NavLink to="/signup"> <Typography variant="subtitle2"> Sign up </Typography> </NavLink>
                        </Button>
                    </Grid>
                </form>
            </div>
        </Paper>
    );

}


export default withRouter(LoginTab)
