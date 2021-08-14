const mongoose = require('mongoose')
// create shortId
const { nanoid } = require('nanoid')

const Schema = mongoose.Schema

const urlSchema = new Schema({
  fullURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    default: nanoid(5),
  },
})
module.exports = mongoose.model('URL', urlSchema)
