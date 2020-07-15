const express = require("express")
const router = express.Router()
const viewController = require("../controller/view")
const { views } = require("../controller/view")

router.post("/count", viewController.count)
router.get("/", viewController.views)
router.delete("/destroy/:id", viewController.destroy)
module.exports = router