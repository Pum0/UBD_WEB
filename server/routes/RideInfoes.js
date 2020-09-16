const express = require('express');
const router = express.Router();
const { RideInfo } = require('../models/RideInfo');

//=================================
//             RideInfo
//=================================


// 주행정보 DB저장
router.post("/RideInfoAdd", (req, res) => {

    const rideInfo = new RideInfo(req.body)

    rideInfo.save((err, rideInfo) => {
        if (err) return res.json({
            RideInfoAddSucces: false,
            err
        })

        RideInfo.find({ '_id': rideInfo._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({
                    RideInfoAddSuccess: false,
                    err
                })
                return res.status(200).json({
                    RideInfoAddSuccess: true,
                    result
                })

            })
    })
})


// 주행정보 불러오기
router.post("/getRideInfo", (req, res) => {

    RideInfo.find({ 'writer': req.body.writer })
        .populate('writer')
        .exec((err, rideInfo) => {
            if (err) return res.status(400).json({
                getRideInfoSuccess: false,
                message: "주행정보를 불러올 수 없습니다.", err
            })
            res.status(200).json({
                getRideInfoSuccess: true,
                rideInfo
            })
        })
})



module.exports = router;