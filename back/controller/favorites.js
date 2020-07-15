const favoritesControllers = {}
const { User } = require("../models/index")


favoritesControllers.addToFav = (req, res, next) => {
    let movie = { Title: req.body.Title, Poster: req.body.Poster }
    User.findOne({ _id: req.body.id })
        .then(user => {
            let flag = false
            user.favorites.map((elemento) => {
                if (elemento.Title === req.body.Title) {
                    flag = true
                }

            })
            if (flag === false) {
                User.updateOne({
                    _id: req.body.id,
                }, {
                    favorites: [...user.favorites, movie]
                })
                    .then(() => res.sendStatus(200))
            }
        })
}

favoritesControllers.removeToFav = (req, res, next) => {
    User.findOne({ _id: req.body.id })
        .then(user => {
            const newMovie = user.favorites.filter((elemento) => {
                if (elemento.Title !== req.body.Title) {
                    return elemento
                }

            })
            User.updateOne({
                _id: req.body.id,
            }, {
                favorites: [newMovie]
            })
                .then(() => res.sendStatus(200))
        })
}
module.exports = favoritesControllers