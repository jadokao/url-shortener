// const express = require('express')
import * as express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { style: 'style.css' })
})

// module.exports = router
export default router
