import React, {Component} from "react";
import Community_Board from "../PostListPage/BoardList";
import Sharing_Board from "../board/SharingPost";
import RecordPage from "../board/RecordPage";
import {Route, Switch} from "react-router-dom";
import Auth from "../../../hoc/auth";
import BoardList from "../PostListPage/BoardList";
import PostWritePage from "../PostPage/PostWritePage";
import _PostPage from "../PostPage/_PostPage";
import PostUpdatePage from "../PostPage/PostUpdatePage";


class ContentRouter extends Component {
// option
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입이 불가능한 페이지
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/Home/my_record" component={Auth(RecordPage, true)}/>
                    <Route exact path="/Home/BoardList" component={Auth(BoardList, true)}/>
                    <Route exact path="/Home/share_board" component={Auth(Sharing_Board, true)}/>
                    <Route exact path="/Home/PostWritePage" component={Auth(PostWritePage, true)}/>
                    <Route exact path="/Home/post_id" component={Auth(_PostPage, true)}/>
                    <Route exact path="/Home/:post_id/PostUpdatePage" component={Auth(PostUpdatePage, true)}/>

                </Switch>
            </div>

        );
    }
}


export default ContentRouter;