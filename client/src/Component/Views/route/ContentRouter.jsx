import React, {Component} from "react";
import Community_Board from "../PostListPage/BoardList";
import Sharing_Board from "../board/Sharing_Board";
import My_Record from "../board/My_Record";
import {Route, Switch} from "react-router-dom";
import Auth from "../../../hoc/auth";
import BoardList from "../PostListPage/BoardList";
import BoardWritePage from "../PostPage/BoardWritePage";
import _PostPage from "../PostPage/_PostPage";
import BoardUpdatePage from "../PostPage/BoardUpdatePage";


class ContentRouter extends Component {
// option
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입이 불가능한 페이지
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Home/board/my_record" component={Auth(My_Record, true)}/>
                    <Route path="/Home/board/BoardList" component={Auth(BoardList, true)}/>
                    <Route path="/Home/board/share_board" component={Auth(Sharing_Board, true)}/>
                    <Route path="/Home/board/BoardWritePage" component={Auth(BoardWritePage, true)}/>
                    <Route exact path="/Home/board/:post_id" component={Auth(_PostPage, true)}/>
                    <Route path="/Home/board/:post_id/BoardUpdatePage" component={Auth(BoardUpdatePage, true)}/>
                </Switch>
            </div>

        );
    }
}


export default ContentRouter;