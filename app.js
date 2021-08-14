const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

// import mongoDB
require('./config/mongoose')

// import css setting
app.use(express.static('public'))

// express-handlebars setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
