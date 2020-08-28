const express = require('express');
const router = express.Router();
const multer = require('multer');
const moment = require('moment');

const { Post } = require('../models/Post');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${moment().format("YYYYMMDDHHmm")}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || '.png') {
            return cb(res.status(400).end('확장자 .jpg, .png 만 가능합니다.'), false);
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
            return res.json({
                uploadfilesSuccess: false,
                message: "파일을 업로드 할 수 없습니다.", err
            })
        }
        return res.json({
            uploadfilesSuccess: true,
            filePath: res.req.file.path, fileName: res.req.file.filename
        })
    })

});


// 게시물 작성
router.post("/writePost", (req, res) => {

    const post = new Post(req.body)

    post.save((err, post) => {
        if (err) return res.status(400).json({
            writePostSuccess: false,
            message: "게시물을 작성할 수 없습니다.", err
        })
        return res.status(200).json({
            writePostSuccess: true
        })
    })

})


// 게시물 목록 불러오기
router.get("/getPosts", (req, res) => {

    Post.find()
        .populate('writer')
        .exec((err, posts) => {
            if (err) return res.status(400).json({
                getPostsSuccess: false,
                message: "게시물 목록을 불러올 수 없습니다.", err
            });
            res.status(200).json({
                getPostsSuccess: true,
                posts
            })
        })

})

// 게시물 불러오기
router.post("/getPost", (req, res) => {

    Post.findOne({ "_id": req.body.post_id })
        .populate('writer')
        .exec((err, post) => {
            if (err) return res.status(400).json({
                getPostSuccess: false,
                message: "불러 올 게시물을 찾을 수 없습니다.", err
            });
            res.status(200).json({
                getPostSuccess: true,
                post
            })
        })
})


// 게시물 수정
router.post("/updatePost", (req, res) => {

    Post.findOneAndUpdate({ _id: req.body.post_id }, { $set: { "title": req.body.title, "content": req.body.content } })
        .exec((err, doc) => {
            console.log("reqPostId : " + req.post_id + " title : " + req.body.title + "content : " + req.body.content + "  " + doc)
            if (err) return res.status(400).json({
                updatePostSuccess: false,
                message: "수정할 게시물을 찾을 수 없습니다.", err
            });
            res.status(200).json({
                updatePostSuccess: true,
                doc
            })

        })
});

// 게시물 삭제
router.post("/deletePost", (req, res) => {

    Post.deleteOne({ _id: req.body.post_id })
        .exec((err, doc) => {
            if (err) return res.status(400).json({
                deletePostSuccess: false,
                err
            });
            res.status(200).json({
                deletePostSuccess: true,
                doc
            })
        })
});


module.exports = router;