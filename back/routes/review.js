const express = require("express")
const route = express.Router()
const review = require("../controller/review")
route.put("/comment/like", review.like)
route.get("/commentsMovie/:movieId/:page", review.findAllMovie) //postea comentario de una pelicula
route.get("/commentsPage/:page", review.findAllPage)//postea comentario de la pagina
route.post("/movie", review.movie)
route.post("/page", review.page)
route.get("/", review.coments)


module.exports = route