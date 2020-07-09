const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Post } = require('../models/Post');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || '.png') {
            return cb(res.status(400).end('only jpg, png is allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

//=================================
//             Posts
//=================================

// 파일 업로드 
router.post("/uploadfiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});


// 게시물 작성
router.post("/writePost", (req, res) => {

    const post = new Post(req.body)

    post.save((err, post) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

})


// 게시물 목록 불러오기
router.get("/getPosts", (req, res) => {

    Post.find()
        .populate('writer')
        .exec((err, posts) => {
            if (err) return res.status(400).json({ success: false, err });
            // if (!post) return res.json({ success: false, message: "불러 올 목록을 찾을 수 없습니다." });
            res.status(200).json({ success: true, posts })
        })

})

// 게시물 불러오기
router.post("/getPost", (req, res) => {

    Post.findOne({ "_id": req.body.post_id })
        .populate('writer')
        .exec((err, post) => {
            if (err) return res.status(400).json({ success: false, err });
            // if (!post) return res.json({ success: false, message: "불러 올 게시물을 찾을 수 없습니다." });
            res.status(200).json({ success: true, post })
        })
})


// 게시물 수정
router.post("/updatePost", (req, res) => {

    Post.findOneAndUpdate({ _id: req.body.post_id }, { $set: { "title": req.body.title, "content": req.body.content } })
        .exec((err, doc) => {
            console.log("reqPostId : " + req.post_id + " title : " + req.body.title + "content : " + req.body.content + "  " + doc)
            if (err) return res.status(400).json({ success: false, err });
            // if (!post) return res.json({ success: false, message: "수정할 게시물을 찾을 수 없습니다." });
            res.status(200).json({ success: true, doc })

        })
});

// 게시물 삭제
router.post("/deletePost", (req, res) => {

    Post.deleteOne({ _id: req.body.post_id } )
    .exec((err, doc) => {
        if(err) return res.status(400).json({ success: false, err});
        res.status(200).json({ success: true, doc})
    })
});


module.exports = router;