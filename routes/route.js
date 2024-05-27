const express = require('express')
const router = express.Router()
const Url = require('../models/Url.js')
express().use(express.json())

router.post("/shorturl", function(req, res) {
    const bodyurl = req.body.url
    const short = btoa(bodyurl)
    const newUrl = {urlname: bodyurl, shorturl: short.slice(0, 6)}
    const url = new Url(newUrl)
    try {
        const dataToSave = url.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get("/shorturl/:url", async function(req, res) {
    const url = req.params.url
    const originurl = await Url.findOne({shorturl:url}).exec()
    console.log(originurl.urlname)
    res.redirect(originurl.urlname)
})

module.exports = router