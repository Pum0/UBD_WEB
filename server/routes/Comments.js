const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

//=================================
//             Comment
//=================================


router.post("/saveComment", (req, res) => {

    const comment = new Comment(req.body)

    comment.save((err, comment) => {
        if (err) return res.json({ success: false, err })

        Comment.find({ '_id': comment._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })

})

router.post("/getComments", (req, res) => {

    Comment.find({ "post_Id": req.body.post_Id })
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        })

});

router.post("/updateComments", (req, res) => {

    Post.findOneAndUpdate({ "post_Id": req.body.post_id, "content": req.body.content })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            if (!post) return res.json({ success: false, message: "수정할 댓글를 찾을 수 없습니다." });
            res.status(200).json({ success: true, doc })
        })
});




module.exports = router;