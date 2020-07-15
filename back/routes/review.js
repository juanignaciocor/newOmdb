const express = require("express")
const router = express.Router()
const review = require("../controller/review")
const user = require("../controller/userController")

router.get("/commentsMovie/:movieId", review.findAllMovie) //postea comentario de una pelicula
router.get("/commentsPage", review.findAllPage)//postea comentario de la pagina
router.post("/movie", user.isUser, review.movie)
router.post("/page", user.isUser, review.page)
//asdkjhaskjd



module.exports = router