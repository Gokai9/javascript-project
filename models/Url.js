const mongoose = require('mongoose')

const schema = mongoose.Schema({
    urlname: String,
    shorturl: String,
})

module.exports = mongoose.model("Url", schema)