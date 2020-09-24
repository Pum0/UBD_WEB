const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    created: {
        type: Date,
        default: moment()
    }

}, { timestamps: true })


const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }