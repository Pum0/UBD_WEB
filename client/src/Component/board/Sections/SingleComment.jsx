import React from "react";
import {Avatar, Button, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function SingleComment() {


    return (
        <div>
            <div>
                <Avatar alt="" src="" />

            </div>


            <form onSubmit>

                <TextField type="text"
                           placeholder="댓글을 입력하세요."
                           fullWidth margin="normal"
                           value
                           onChange
                           style={{width: "83%"}}/>
                <Button type="submit"
                        size="medium "
                        variant="contained"
                        edge="start"
                        color="default"
                        style={{margin: 10, textAlign: "center"}}>

                    <Typography variant="button">입력</Typography>

                </Button>

            </form>
        </div>
    );

}


export default SingleComment;