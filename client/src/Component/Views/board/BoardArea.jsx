import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ContentRouter from "../route/ContentRouter";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

class BoardArea extends Component {
    render() {
        return (
            <div>


                <NavLink to="/Home">
                    <IconButton edge="start" color="inherit">
                        <ArrowDropUpIcon/>
                    </IconButton>
                </NavLink>


                <Grid>
                    <NavLink to="/Home/board/BoardList">
                        <Button edge="start" color="inherit">
                            <Typography variant="h6">자유게시판</Typography>
                        </Button>
                    </NavLink>
                </Grid>

                <Grid>
                    <NavLink to="/Home/board/share_board">
                        <Button edge="start" color="inherit">
                            <Typography variant="h6">공유게시판</Typography>
                        </Button>
                    </NavLink>
                </Grid>

                <NavLink to="/Home/board/my_record">
                    <Button edge="start" color="inherit">
                        <Typography variant="h6">나의기록</Typography>
                    </Button>
                </NavLink>


                <ContentRouter></ContentRouter>

            </div>
        );
    }
}


export default withRouter(BoardArea);