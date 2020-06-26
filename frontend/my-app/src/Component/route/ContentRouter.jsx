import React, {Component} from "react";
import Community_Board from "../board/Community_Board";
import Sharing_Board from "../board/Sharing_Board";
import My_Record from "../board/My_Record";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Board_Area from "../board/Board_Area";

class ContentRouter extends Component {

    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/Home/board/my_record" component={My_Record}/>
                        <Route path="/Home/board/free_board" component={Community_Board}/>
                        <Route path="/Home/board/share_board" component={Sharing_Board}/>
                    </Switch>
                </div>

        );
    }
}


export default ContentRouter;