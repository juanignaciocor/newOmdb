const express = require("express")
const route = express.Router()
const User = require("./user")
const View = require("./views")
const Review = require("./review")
route.use("/user", User)
route.use("/view", View)
route.use("/review", Review)




module.exports = route