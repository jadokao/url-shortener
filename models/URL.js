// const mongoose = require('mongoose')
import mongoose from 'mongoose'
// create shortId
// const { nanoid } = require('nanoid')
import { nanoid } from 'nanoid'

// const Schema = mongoose.Schema

const urlSchema = new mongoose.Schema({
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
// module.exports = mongoose.model('URL', urlSchema)
export default mongoose.model('URL', urlSchema)
