const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { style: 'style.css' })
})

module.exports = router
