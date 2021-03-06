const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const { User } = require("../models/User");

//=================================
//             User
//=================================

// 회원 가입
router.post("/register", (req, res) => {
    //회원가입 할떄 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return require.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

// 이메일 중복체크
router.post("/emailCheck", (req, res) => {    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user)
            return res.json({
                loginCheck: true,
                message: "중복되는 이메일 입니다."
            })
        else {
            return res.json({
                loginCheck: false,
                message: "사용 가능한 이메일 입니다."
            })
        }
    })
})

// 로그인
router.post("/login", (req, res) => {    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."


            });


        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                });

            // 비밀번호 까지 같다면 토큰을 생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("x_authExp", user.tokenExp);
                // 토큰을 저장한다. 으디에? 쿠키
                res
                    .cookie("x_auth", user.token)
                    .status(200).json({
                        loginSuccess: true, userID: user._id
                    });
            });
        });
    });
});

// 회원 인증
router.get("/auth", auth, (req, res) => {
    //여기까지 미들웨어를 통과했다 => Auth = true
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true, //role이 0이 아니면 admin, 0이면 일반유저
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image
    })
})

// 로그아웃 
router.get("/logout", auth, async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" })
        return res.status(200).send({
            success: true
        });
    } catch (error) {
        console.log(error)
    }
});

// 비밀번호 변경
router.post("/updatePassword", (req, res) => {

    Post.findOneAndUpdate({ _id: req.body.user_id }, { $set: { "password": req.body.password } })
        .exec((err, doc) => {
            // console.log("reqPostId : " + req.post_id + " title : " + req.body.title + "content : " + req.body.content + "  " + doc)
            if (err) return res.status(400).json({ success: false, message: "변경할 비밀번호를 찾을 수 없습니다.", err });
            res.status(200).json({ success: true, doc })

        })
});

// 회원 탈퇴
router.post("/deleteUser", (req, res) => {

    Post.deleteOne({ _id: req.body.user_id })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, message: "회원탈퇴 할 수 없습니다.", err });
            res.status(200).json({ success: true, doc })
        })
});


module.exports = router;