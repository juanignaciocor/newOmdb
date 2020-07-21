const { Review } = require("../models/index.js")
const reviewController = {}

reviewController.page = (req, res, next) => {
    Review.create({
        userId: req.body.userId,
        comments: req.body.comments,
    })
        .then((data) => res.status(200).json(data))
        .catch(next)
}

reviewController.like = (req, res, next) => {
    Review.findOne({ _id: req.body.id })
        .then((review) => {
            review.updateOne({ likes: review.likes + 1 })
                .then((data) => { res.sendStatus(200) })
        }).catch(next)
}
reviewController.movie = (req, res, next) => {
    Review.create({
        userId: req.body.userId,
        comments: req.body.comments,
        public: req.body.movieId
    })
        .then((data) => res.status(200).json(data))
        .catch(next)
}

reviewController.findAllMovie = (req, res, next) => {
    Review.find({ public: req.params.movieId }).populate("userId").sort([["_id", 'descending']])
        .then((data) => {
            let page = req.params.page * 3
            const reviews = data.slice(0, page)
            res.status(200).json(reviews)
        })
        .catch(next)
}
reviewController.findAllPage = (req, res, next) => {
    Review.find({ public: "page" })
        .then((data) => res.status(200).json(data))
        .catch(next)
}
reviewController.coments = (req, res, next) => {
    Review.find()
        .then((data) => res.status(200).json(data))
        .catch(next)
}


module.exports = reviewController