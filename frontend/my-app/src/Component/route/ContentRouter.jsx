import React,{Component} from "react";
import Community_Board from "../board/Community_Board";
import Sharing_Board from "../board/Sharing_Board";
import My_Record from "../board/My_Record";
import {Switch, Route} from "react-router-dom";
class ContentRouter extends Component {

    render() {
        return(
          <div>

            <Switch>
                <Route path="/board/free_board"><Community_Board></Community_Board> </Route>
                <Route path="/board/share_board"><Sharing_Board></Sharing_Board></Route>
                <Route path="/board/my_record"><My_Record></My_Record></Route>

            </Switch>
          </div>
        );
    }
}


export default ContentRouter;