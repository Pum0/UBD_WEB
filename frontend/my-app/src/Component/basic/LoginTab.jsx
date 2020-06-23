import React,{Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import {NavLink} from "react-router-dom";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required/>
                        </Grid>
                    </Grid>

                    <Grid container justify="center" style={{marginTop: '10px'}}>
                        <Button variant="outlined" color="primary" style={{textTransform: "none"}}>
                            <NavLink to="/Home" style={{textDecoration:"none"}}>Login</NavLink>
                        </Button>

                        <Button variant="outlined" color="primary" style={{textTransform: "none"}}>
                            <NavLink to="/sign-in" style={{textDecoration:"none"}}>Sign in</NavLink>
                        </Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);