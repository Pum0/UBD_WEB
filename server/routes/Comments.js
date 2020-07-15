const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

//=================================
//             Comment
//=================================

// 댓글 작성
router.post("/writeComment", (req, res) => {

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

// 댓글 불러오기
router.post("/getComments", (req, res) => {

    Comment.find({ "post_Id": req.body.post_Id })
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        })

});


// 댓글 수정
router.post("/updateComment", (req, res) => {

    Comment.findOneAndUpdate({ "post_Id": req.body.comment_id, "content": req.body.content })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, message: "수정할 댓글를 찾을 수 없습니다.", err });
            res.status(200).json({ success: true, doc })
        })
});

// 댓글 삭제
router.post("/deleteComment", (req, res) => {

    Comment.deleteOne({ _id: req.body.comment_id })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200), json({ success: true, doc })
        })
});




module.exports = router;