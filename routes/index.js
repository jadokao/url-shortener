const express = require('express')
const router = express.Router()

// 跟home相關的
const home = require('./modules/home')
router.use('/', home)

// 跟URL的CRUD相關的
const url = require('./modules/url')
router.use('/url', url)

module.exports = router
