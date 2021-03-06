const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');
const moment = require('moment');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    name: {
        type: String,
        maxlength: 50
    },
    password: {
        type: String,
        minlength: 5
    },
    birth: {
        type: Date,
        default: moment()
    },
    weight: {
        type: Number
    },
    created: {
        type: Date,
        default: moment()
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: String,
    tokenExp: Number,
    refreshoken: String,
    refreshTokenExp: Number

})


userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

//plainPassword 1234567, 암호화된 비밀번호 $2b$10$C3/4hKk8Qb2SZcPEQVEezODkJqErPxC1pDd92EU8yeKtVHWbdfi3m
userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.methods.generateToken = function (cb) {
    var user = this;

    // jsonwebtoken을 이용해서 토큰을 생성하기
    var token = jwt.sign(user._id.toHexString(), "OurFirstSecretKey");
    var oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'OurFirstSecretKey', function (err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음 
        // 클라이언트에서 가져온 토큰과 DB에 있는 토큰이 일치하는지 확인

        user.findOne({ "_id": decoded, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user)
        })
    })
}


userSchema.methods.generateRefreshToken = function (cb) {
    var user = this;

    crypto.randomBytes(20, function (err, buffer) {
        var token = buffer.toString('hex');
        var today = moment().startOf('day').valueOf();
        var tomorrow = moment(today).endOf('day').valueOf();

        user.refreshToken = token;    
        user.refreshTokenExp = tomorrow;
        user.save(function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}




const User = mongoose.model('User', userSchema)

module.exports = { User }
