const express = require("express")
const route = express.Router()
const User = require("./user")
const View = require("./views")

route.use("/user", User)
route.use("/view", View)





module.exports = route