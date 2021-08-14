const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log(error)
})
db.once('open', () => {
  console.log('mongoDB connected!!')
})

module.exports = db
