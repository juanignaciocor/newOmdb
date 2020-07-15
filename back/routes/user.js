const express = require("express")
const router = express.Router()
const passport = require("../passport/index");
const userController = require("../controller/userController")
const favoritesController = require("../controller/favorites")
router.put("/removeFav", favoritesController.removeToFav)
router.put("/addFav", favoritesController.addToFav)
router.get('/logout', userController.logOut)
router.post('/logued', passport.authenticate('local'), userController.logIn)
//router.get('/auth/facebook', passport.authenticate('facebook'), userController.logIn);
//router.get('/auth/facebook/callback', userController.facebookResponse);
router.get("/checkCookie", userController.verificateLogin)
router.get("/:id", userController.findOne)
router.delete("/:id", userController.remove)
router.get("/", userController.findAll)
router.post("/", userController.createUser)


module.exports = router