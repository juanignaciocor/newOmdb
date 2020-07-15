const User = require('../models/user');
const UserController = {}
const nodemailer = require("nodemailer")
const sendMail = function () {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ecomercelospibesjs@gmail.com",
            pass: "lospibes1234"
        }
    });
    const mailOptions = {
        from: "ecomercelospibesjs@gmail.com",
        to: "juanignaciocor92@gmail.com",
        subject: "Confirmación de tu compra",
        text: "asd"
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Se ha enviando el mail");
        }
    });
}

UserController.facebookResponse = (req, res, next) => {
    res.sendStatus(200)
}
UserController.remove = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then((data) => res.sendStatus(200))
        .catch(next)
}

UserController.findAll = (req, res, next) => {
    User.find()
        .then((data) => res.status(200).json(data))
        .catch(next)
},

    UserController.findOne = (req, res, next) => {
        User.findOne({ _id: req.params.id })
            .then((data) => res.status(200).json(data))
            .catch(next)

    },

    UserController.logOut = function (req, res) {
        req.logout()
        res.send('deslogueado!')
    }


UserController.logIn = (req, res) => {
    if (req.user) {
        res.status(200).json(
            {
                email: req.user.email,
                age: req.user.age,
                username: req.user.username,
                favorites: req.user.favorites,
                id: req.user._id


            })
    } else {
        res.sendStatus(401)
    }
}
UserController.verificateLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.json({
            email: req.user.email,
            age: req.user.age,
            favorites: req.user.favorites,
            username: req.user.username,
            id: req.user._id

        })
    } else {
        res.json({})
    }
}

// Registro de usuario con bcryptjs
UserController.createUser = async (req, res) => {
    const errors = []
    let { email, age, username, password } = req.body
    age = Number(age)
    const emailUser = await User.findOne({ username: username })
    if (emailUser) {
        res.status(400).json({ errorUsername: true })
    } else {
        const newUser = new User({ email, age, username, password })
        newUser.password = await newUser.encryptPassword(password)
        const nuevoUsuario = await User.create(newUser)
        res.status(200).json({})
    }
}

module.exports = UserController