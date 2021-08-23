const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const bodyParser = require('body-parser')
const clipboardy = require('clipboardy')

const app = express()

const port = process.env.PORT || 3000

// import mongoDB
require('./config/mongoose')

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

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
