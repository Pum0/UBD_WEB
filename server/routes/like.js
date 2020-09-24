const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
const { DisLike } = require("../models/DisLike")


//=================================
//             Like
//=================================

router.post("/getLikes", (res, req) => {

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

router.post("/getDisLikes", (res, req) => {

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
                getDisLikesSuccess: true,
                dislikes
            })
        })
})




module.exports = router;