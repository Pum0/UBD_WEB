const express = require('express')
const app = express()
const path = require("path");
const helmet = require('helmet');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require("./config/key");


const mongoose = require('mongoose')
const connect = mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDb Conneted.."))
    .catch(err => console.log(err))


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

// Helmet helps you secure your Express apps by setting various HTTP headers. 
app.use(helmet())

// Logger Middleware
app.use(morgan('dev'));

app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/Posts'));
app.use('/api/comments', require('./routes/Comments'));
// app.use('/api/rideInfoes', require('/routes/RideInfoes'));

app.use('/uploads', express.static('uploads'));


if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));

    // index.html for all page routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
