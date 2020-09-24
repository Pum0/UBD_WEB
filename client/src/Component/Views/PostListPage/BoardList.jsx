import { Button, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { Drawer, Card, Row, Col, Button as Btn, Skeleton, Pagination } from "antd";
import _PostPage from "../PostPage/_PostPage";
import BoardWritePage from "../PostPage/BoardWritePage";

// import {POST_SERVER} from "../config";

function BoardList(props) {

    const [Posts, setPosts] = useState([])
    var BoardList = []
    var postCount = 0;
    var postPageNum;
    const [current, setCurrent] = useState(1);

    const [searchTitle, setSearchTitle] = useState();

    const onChange = page => {
        console.log(page);
        setCurrent(page);
    };




    useEffect(() => {
        axios.get('/api/Posts/getPosts')
            .then(response => {
                if (response.data.getPostsSuccess) {
                    console.log(response.data)
                    setPosts(response.data.posts)
                    UpdatePosts(response.data.posts)
                } else {
                    alert('게시물을 불러오는데 실패했습니다.')
                }
            })
    }, [Posts])

    // drawer visible
    const [visible, setVisible] = useState(false);

    const onPostCloseHandler = (e) => {
        setVisible(false);
    };

    const onPostOpenHandler = (e) => {
        setVisible(true);
    }

    const onSearchHandler = (e) => {
        setSearchTitle(e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }

    const onClickSearch = (e) => {
        e.preventDefault();

        let body = {
            title: searchTitle
        }

        axios.post('/api/Posts/searchPost', body)
            .then(response => {
                if (response.data.searchPostSuccess) {
                    // console.log(response.data.posts)
                    setPosts(response.data.posts)
                } else {
                    alert('게시물을 불러오는데 실패했습니다.')
                }
            })
    }

    const UpdatePosts = (newPosts) => {
        setPosts(Posts.concat(newPosts))
    }

    const listMapping = Posts.map((post, index) => {
        if (post.writer) {

            BoardList.push(
                <Card key={post._id} bordered={true} style={{ width: "100%" }} onClick={onPostOpenHandler} >
                    <Row >
                        <Col xs={{ span: 11, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 5 }} >

                            < p >< NavLink to={`/Home/${post._id}`} ><Typography variant="subtitle2">{post.title}</Typography> </NavLink > </p>
                            < p >{post.writer.name}</p >

                            < p >{moment(post.created).format("YYYY.MM.DD HH:mm")}</p >

                        </Col>
                        {post.images[0] !== "" && <Col xs={{ span: 13, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 3, marginRight: 3 }}>
                            <img src={`http://localhost:5000/${post.images[0]}`} alt="image" style={{ width: "226px", height: "127px" }} />
                        </Col>
                        }
                        {post.images[0] === "" && <Col xs={{ span: 13, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 3, marginRight: 3 }}>
                            <Skeleton.Image style={{ width: "226px", height: "127px" }} />
                        </Col>
                        }
                        {/* <Col bordered={false} xs={{ span: 5, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                        <Btn icon={<MoreOutlined />}  />
                        </Col> */}
                    </Row>
                </Card >
            )
            postCount++;
            postPageNum = (postCount / 4) * 10;
        } else {
            return (<div>
                <LoadingOutlined />
            </div>)
        }
    })

    // 최신 글 부터 출력되게 리스트를 반전 시켜줌
    { BoardList.reverse() }

    var pageTest = [];

    for (var i = (current - 1) * 4; i < current * 4; i++) {
        pageTest.push(BoardList[i]);
    }



    return (
        <div >
            <Typography variant="h4"> 자유게시판 <br /></Typography>
            <div style={{ display: "flex" }}>
                <NavLink to="/Home/BoardWritePage">
                    <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 3 }}>
                        <Typography variant="subtitle2">글쓰기</Typography>
                    </Button>
                </NavLink>
                {/* 검색용 form 태그 */}
                <form style={{ left: "70%" }}>
                    <TextField type="text" placeholder="찾는 제목을 입력하세요."
                        value={searchTitle} style={{ margin: 3 }} onChange={onSearchHandler} />

                    <Button onClick={onClickSearch} type="submit" size="medium" variant="contained" edge="start" color="inherit">
                        <Typography variant="subtitle2"> 검색</Typography>
                    </Button>
                </form>



            </div>
            {pageTest}

            <Pagination responsive={true} current={current} onChange={onChange} total={postPageNum} style={{ margin: 3 }} />

        </div>
    );

}




export default withRouter(BoardList);