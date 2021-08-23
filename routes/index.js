// const express = require('express')
import * as express from 'express'
const router = express.Router()

// 跟home相關的
// const home = require('./modules/home')
import home from './modules/home.js'
router.use('/', home)

// 跟URL的CRUD相關的
// const url = require('./modules/url')
import url from './modules/url.js'
router.use('/url', url)

// module.exports = router
export default router
