const express = require("express")
const app = express()

const router = require("./router/tamagotchiRouter")

const cors = require('cors')


app.use(cors())

app.use(express.json())

app.use("/", router)

const port = 8000


app.listen(port)