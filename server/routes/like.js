const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
const { DisLike } = require("../models/DisLike")


//=================================
//             Like
//=================================

router.post("/getLikes", (req, res) => {

    let variable = {}
    if (req.body.postId) {
        variable = { postId: req.body.postId }
    } else {
        variable = { commentId: req.body.commentId }

    }
    Like.find(variable)
        .exec((err, likes) => {
            if (err) return res.statusCode(400).send(err)
            res.status(200).json({
                getLikesSuccess: true,
                likes
            })
        })
})

router.post("/getDislikes", (req, res) => {

    let variable = {}

    if (req.body.postId) {
        variable = { postId: req.body.postId }
    } else {
        variable = { commentId: req.body.commentId }

    }
    DisLike.find(variable)
        .exec((err, dislikes) => {
            if (err) return res.statusCode(400).send(err)
            res.status(200).json({
                getDislikesSuccess: true,
                dislikes
            })
        })
})

router.post("/upLike", (req, res) => {

    let variable = {}

    if (req.body.postId) {
        variable = { postId: req.body.postId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId, userId: req.body.userId }
    }

    // Like collection에 클릭 정보 넣어주기

    const like = new Like(variable)

    like.save((err, likeResult) => {
        if (err) return res.json({
            upLikeSuccess: false, err
        })

        // Dislike이 이미 클릭이 되어 있다면, Dislike를 1 줄여줌
        DisLike.findOneAndDelete(variable)
            .exec((err, disLikeResult) => {
                if (err) return res.status(400).json({
                    upLikeSuccess: false, err
                })
                res.status(200).json({
                    upLikeSuccess: true
                })
            })

    })

})

router.post("/unLike", (req, res) => {

    let variable = {}

    if (req.body.postId) {
        variable = { postId: req.body.postId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId, userId: req.body.userId }
    }

    Like.findOneAndDelete(variable)
        .exec((err, unLikeResult) => {
            if (err) return res.status(400).json({
                unLikeSuccess: false,
                err
            })
            res.status(200).json({
                unLikeSuccess: true
            })
        })
})

router.post("/unDislike", (req, res) => {

    let variable = {}

    if (req.body.postId) {
        variable = { postId: req.body.postId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId, userId: req.body.userId }
    }

    DisLike.findOneAndDelete(variable)
        .exec((err, unLikeResult) => {
            if (err) return res.status(400).json({
                unDislikeSuccess: false,
                err
            })
            res.status(200).json({
                unDislikeSuccess: true
            })
        })
})


router.post("/upDislike", (req, res) => {

    let variable = {}

    if (req.body.postId) {
        variable = { postId: req.body.postId, userId: req.body.userId }
    } else {
        variable = { commentId: req.body.commentId, userId: req.body.userId }
    }

    // Dislike collection에 클릭 정보 넣어주기

    const dislike = new DisLike(variable)

    dislike.save((err, dislikeResult) => {
        if (err) return res.json({
            upDislikeSuccess: false, err
        })

        // Like이 이미 클릭이 되어 있다면, Like를 1 줄여줌
        Like.findOneAndDelete(variable)
            .exec((err, LikeResult) => {
                if (err) return res.status(400).json({
                    upDislikeSuccess: false, err
                })
                res.status(200).json({
                    upDislikeSuccess: true
                })
            })

    })

})

module.exports = router;