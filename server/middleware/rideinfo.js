const { RideInfo } = require('../models/RideInfo');

let rideinfoTo = (req, res, next) => {

    const writer =  req.body.writer ;

    RideInfo.findByRideInfo(writer, (err, rideinfo) => {
        
            if (err) throw err;
            if (!rideinfo)
                return res.json({
                    error: true
                })
        })
    req.writer = writer;
    req.rideInfo = rideInfo;
    next()
}

module.exports = { rideinfoTo };