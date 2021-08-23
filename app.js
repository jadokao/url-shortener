//const express = require('express')
import express from 'express'
// const exphbs = require('express-handlebars')
import exphbs from 'express-handlebars'
// const routes = require('./routes')
import routes from './routes/index.js'
// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
import clipboardy from 'clipboardy'
const app = express()

const port = process.env.PORT || 3000

// import mongoDB
// require('./config/mongoose')
import db from './config/mongoose.js'

// import css setting
app.use(express.static('public'))

// express-handlebars setting
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      copyURL: function (text) {
        clipboardy.writeSync(text)
      },
    },
  })
)
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
