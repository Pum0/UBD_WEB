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

router.post("/uploadfiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/writepost", (req, res) => {

    const post = new Post(req.body)

    Post.save((err, post) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

})

router.get("/getPosts", (req, res) => {

    Post.find()
        .populate('writer')
        .exec((err, posts) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, Posts })
        })

})

router.post("/getPost", (req, res) => {

    Post.findOne({ "_id" : req.body.postId })
    .populate('writer')
    .exec((err, post) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, video })
    })
})







module.exports = router;