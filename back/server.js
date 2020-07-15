const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('./passport/index');
const Router = require('./routes/index')
const cookieParser = require('cookie-parser');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session)
const app = express();
const mongoose = require('mongoose')
const cors = require("cors")
require("dotenv").config()
mongoose.connect("mongodb://localhost/omdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }


)
app.use(cors({ origin: true }));
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cookieParser());
app.use(session({
    secret: "omdb",
    //resave: true, // Guarda la sesion por mas que no haya sido modificada
    //saveUninitialized: true, // Cuando iniciamos sesion en una App, si modificamos algo y nno guardamos nada, se va a guardar la sesion
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});



app.use("/api", Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})
app.listen(8080, () => console.log("Connect to port: 8080"))