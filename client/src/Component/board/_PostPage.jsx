import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, withRouter} from "react-router-dom";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import moment from "moment";


function _PostPage(props) {

    const post_id = props.match.params.post_id
    const [postPage, setPost] = useState([])

    // const [CommentLists, setCommentLists] = useState([])

    const postVariable = {
        post_id: post_id
    }


    useEffect(() => {
        axios.post('/api/posts/getPost', postVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setPost(response.data.post)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])


    return (


        <div style={Board_style}>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{postPage.title}</TableCell>
                            <TableCell>{moment(postPage.created).format("MM.DD.HH")}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{postPage.content}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <NavLink to="/Home/board/BoardList">
                <Button size="small" variant="contained" edge="start" color="inherit" style={{margin: 5}}>
                    <Typography variant="subtitle2">뒤로가기</Typography>
                </Button>
            </NavLink>
        </div>
    )
}

//     if (Video.writer) {
//         return (
//             <Row>
//                 <Col lg={18} xs={24}>
//                     <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>

//                         <List.Item
//                             actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}  />,
//                             ]}
//                         >
//                             <List.Item.Meta
//                                 avatar={<Avatar src={Video.writer && Video.writer.image} />}
//                                 title={<a href="https://ant.design">{Video.title}</a>}
//                                 description={Video.description}
//                             />
//                             <div></div>
//                         </List.Item>

//                     </div>
//                 </Col>
//
//             </Row>
//         )

//     } else {
//         return (
//             <div>Loading...</div>
//         )
//     }


const Board_style = {
    margin: 10,
    padding: 0,
    top: "50px",
    position: "absolute",
    left: 0, height: "92%",
    width: "96%",
    zIndex: 451
}
export default withRouter(_PostPage);