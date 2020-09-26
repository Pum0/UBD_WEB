const express = require('express');
const router = express.Router();
const { sharePost } = require('../models/sharePost');

//=================================
//             sharePost
//=================================

// 게시물 저장
router.post("/saveSharePost", (req, res) => {

    const sharepost = new sharePost(req.body)

    sharepost.save((err, post) => {
        if (err) return res.status(400).json({
            saveSharePostSuccess: false,
            message: "게시물을 작성할 수 없습니다.", err
        })
        return res.status(200).json({
            saveSharePostSuccess: true
        })
    })

})

// 게시물 목록 불러오기
router.get("/getSharePost", (req, res) => {

    sharePost.find()
        .populate('writer')
        .populate('RideInfo')
        .exec((err, sharePosts) => {
            if (err) return res.status(400).json({
                getSharePostSuccess: false,
                message: "게시물 목록을 불러올 수 없습니다.", err
            });
            res.status(200).json({
                getSharePostSuccess: true,
                sharePosts
            })
        })

})


module.exports = router;