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
        if (err) return res.json({ succes: false, err })

        RideInfo.find({ '_id': rideInfo._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
                
            })
    })
})

module.exports = router;