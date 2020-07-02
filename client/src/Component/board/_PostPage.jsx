import React, { useEffect, useState } from 'react'
import axios from 'axios';


function _PostPage(props) {

    const postId = props.match.params.postId
    const [Post, setPost] = useState([])
    // const [CommentLists, setCommentLists] = useState([])

    const PostVariable = {
        PostId: PostId
    }

    useEffect(() => {
        axios.post(`${POST_SERVER}/getPost`, PostVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setPost(response.data.post)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])

    // const updateComment = (newComment) => {
    //     setCommentLists(CommentLists.concat(newComment))
    // }


    //     if (Video.writer) {
    //         return (
    //             <Row>
    //                 <Col lg={18} xs={24}>
    //                     <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
    //                         <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>

    //                         <List.Item
    //                             actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')}  />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
    //                         >
    //                             <List.Item.Meta
    //                                 avatar={<Avatar src={Video.writer && Video.writer.image} />}
    //                                 title={<a href="https://ant.design">{Video.title}</a>}
    //                                 description={Video.description}
    //                             />
    //                             <div></div>
    //                         </List.Item>

    //                         <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} />

    //                     </div>
    //                 </Col>
    //                 <Col lg={6} xs={24}>

    //                     <SideVideo />

    //                 </Col>
    //             </Row>
    //         )

    //     } else {
    //         return (
    //             <div>Loading...</div>
    //         )
    //     }
    }
    const Board_style = {
        margin: 10,
        padding: 0,
        top: "50px",
        position: "absolute",
        left: 0, height: "92%",
        width: "96%",
        zIndex: 451
    }
    export default _PostPage();