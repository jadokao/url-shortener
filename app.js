const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

// import mongoDB
require('./config/mongoose')

// import css setting
app.use(express.static('public'))

// express-handlebars setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', { style: 'style.css' })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
