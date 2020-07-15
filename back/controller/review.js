const { Review } = require("../models/index.js")
const reviewController = {}

reviewController.page = (req, res, next) => {
    Review.create({
        userId: req.body.userId,
        comments: req.body.comments
    })
        .then((data) => res.status(200).json(data))
}

reviewController.movie = (req, res, next) => {
    Review.create({
        userId: req.body.userId,
        comments: req.body.comments,
        public: req.body.movieId
    })
        .then((data) => res.status(200).json(data))
}

reviewController.findAllMovie = (req, res, next) => {
    Review.find({ plublic: req.params.movieId })
        .then((data) => res.status(200).json(data))
}
reviewController.findAllPage = (req, res, next) => {
    Review.find({ plublic: "page" })
        .then((data) => res.status(200).json(data))
}