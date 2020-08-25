import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { Drawer, Card, Row, Col, Button as Btn, Skeleton } from "antd";
import _PostPage from "../PostPage/_PostPage";

// import {POST_SERVER} from "../config";

function BoardList(props) {

    const [Posts, setPosts] = useState([])
    var BoardList = []
    var descendingOrder = [];


    useEffect(() => {
        axios.get('/api/Posts/getPosts')
            .then(response => {
                if (response.data.getPostsSuccess) {
                    console.log(response.data.posts)
                    setPosts(response.data.posts)
                } else {
                    alert('게시물을 불러오는데 실패했습니다.')
                }
            })
    }, [])

    // drawer visible
    const [visible, setVisible] = useState(false);

    const onPostCloseHandler = (e) => {
        setVisible(false);
    };

    const onPostOpenHandler = (e) => {
        setVisible(true);
    }


    const renderTableRows = Posts.map((post, index) => {
        if (post.writer) {
            // BoardList.push(<TableBody>
            //     <TableRow>
            //         {/* <TableCell>{post.seq} </TableCell> */}
            //         <TableCell component="th" scope="row"><NavLink to={`/Home/${post._id}`} onClick={onPostOpenHandler}>
            //             <Typography variant={"subtitle2"}>{post.title}</Typography></NavLink></TableCell>
            //         <TableCell align="right">{post.writer.name}</TableCell>
            //         <TableCell align="right">{moment(post.created).format("MM.DD")}</TableCell>
            //         <TableCell align="right" style={{ textAlign: "center" }}>{post.viewcount}</TableCell>
            //     </TableRow>
            // </TableBody>)
            BoardList.push(
            <Card bordered={true} style={{ width: "100%" }} onClick={onPostOpenHandler} >
                <Row >
                    <Col xs={{ span: 11, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 5 }} >

                        < p >< NavLink to={`/Home/${post._id}`} ><Typography variant="subtitle2">{post.title}</Typography> </NavLink > </p>
                        < p >{post.writer.name}</p >

                        < p >{moment(post.created).format("YYYY.MM.DD HH:mm")}</p >

                    </Col>
                    {post.images[0] !== "" && <Col xs={{ span: 13, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 3, marginRight: 3 }}>
                        <img src={`http://localhost:5000/${post.images[0]}`} alt="image"style={{ width:"226px",height:"127px"}} />
                    </Col>
                    }
                    {post.images[0] === "" && <Col xs={{ span: 13, offset: 2 }} lg={{ span: 6, offset: 2 }} style={{ marginLeft: 3, marginRight: 3 }}>
                       <Skeleton.Image  style={{ width: "226px", height:"127px" }} />
                    </Col>
                    }
                    {/* <Col bordered={false} xs={{ span: 5, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                    <Btn icon={<MoreOutlined />}  />
                    </Col> */}
                </Row>
            </Card >
            )
        } else {
            return (<div>
                <LoadingOutlined />
            </div>)
        }
    })
    for (var i = BoardList.length; i >= 0; i--) {
        descendingOrder.push(BoardList[i]);
    }

    return (
        <div>

            {/*{renderTableRows}*/}
            {descendingOrder}






            <NavLink to="/Home/BoardWritePage">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}>
                    <Typography variant="subtitle2">글쓰기</Typography>
                </Button>
            </NavLink>
            <NavLink to="/Home">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{ margin: 5 }}>
                    <Typography variant="subtitle2">뒤로가기</Typography>
                </Button>
            </NavLink>

            {/* <_PostPage postId={postId}> */}


        </div>
    );

}




export default withRouter(BoardList);