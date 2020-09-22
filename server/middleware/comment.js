const { Comment } = require('../models/Comment');

let commentM = (req, res, next) => {

    const postId = req.body.postId;

    Comment.find({ postId: postId })
        .populate('writer')
        .exec((err, comment) => {
            if (err) return res.status(400).send(err)

            comment = comment;
            req.comment = comment;
            next()
        });


    // Comment.find({ postId: postId }, (err, comment) => {
    //     if (err) throw err;
    //     if (!comment)
    //         return res.status(400).send(err)

    //     req.comment = comment;
    //     next()
    // })
};

module.exports = { commentM };