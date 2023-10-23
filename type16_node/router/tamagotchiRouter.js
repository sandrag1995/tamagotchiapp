const express = require("express")
const router = express.Router()

const {
    startGame,
    getData,
    restart,
    sell,
    feed,
    getImage
} = require("../controllers/tamagotchiController")


router.get("/start/:num", startGame)
router.get("/getData", getData)
router.get("/restart", restart)
router.get("/sell/:id", sell)
router.get('/feed', feed)

router.get("/image/:name", getImage)

module.exports = router