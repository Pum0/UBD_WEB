const moment = require('moment')
const { User } = require('../models/User');

let auth = (req, res, next) => {

    // 인증 처리를 하는 곳
    const token = req.cookies.x_auth;
    const tokenExp = req.cookies.x_authExp;


    var now = moment().valueOf();

    // 토큰을 Decode(복호화)한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {

        if (err) throw err;
        if (!user)
            return res.json({
                isAuth: false,
                error: true
            });

        if (tokenExp < now) return res.json({
            isAuth: false, error: true, message : '토큰이 만료되었습니다.'
        })
        
        console.log(now);
        console.log(tokenExp)
        req.tokenExp = tokenExp;
        req.token = token;
        req.user = user;
        next()
    });



    // 유저가 있으면 인증 O

    // 유저가 없으면 인증 X
};

module.exports = { auth };