const { View } = require("../models/index")
const ViewController = {}


ViewController.count = (req, res, next) => {
    View.findOne({
        movieId: req.body.movieId
    })
        .then((data) => {
            if (data !== null) {
                data.updateOne({ count: data.count + 1 })
                    .then(() => res.sendStatus(200))

            } else {
                View.create({ movie: req.body.movie, count: 1, movieId: req.body.movieId })
                    .then(() => res.sendStatus(200))

            }
        })
}

ViewController.destroy = (req, res, next) => {
    View.deleteOne({ _id: req.params.id })
        .then(() => res.sendStatus(200))
}
ViewController.views = (req, res, next) => {
    View.find()
        .then((data) => res.status(200).json(data))
}
module.exports = ViewController