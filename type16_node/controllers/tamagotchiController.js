const path = require("path");


const resSend = (res, error, data, message) => {
    res.send({error, data, message})
}

const {
    selectImage,
    getData: getGameData,
    restartGame,
    sellEgg,
    feedAnimal
} = require("../modules/GameMethods")

module.exports = {
    startGame: (req, res) => {
        const {num} = req.params

        const data = selectImage(Number(num))

        if(!data) return resSend(res, true, null, "Image is selected already")

        resSend(res, false, data, null)
    },
    getData: (req, res) =>  resSend(res, false, getGameData(), null),
    restart: (req, res) => {
        restartGame()
        resSend(res, false, null, null)
    },
    sell: (req, res) => {
        const {id} = req.params
        const data = sellEgg(Number(id))
        resSend(res, false, data, null)
    },
    feed: (req, res) => resSend(res, false, feedAnimal(), null),

    getImage: (req, res) => {
        const {name} = req.params
        const filePath = path.resolve(`./images/${name}`)
        res.sendFile(filePath)
    }
}