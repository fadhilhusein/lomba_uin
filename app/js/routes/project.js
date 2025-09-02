const express = require('express')
const router = express.Router()
const db = require("../db")

router.get("/", (req, res) => {
    res.send("Router jalan broski!")
})

module.exports = router;