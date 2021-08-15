const express = require('express')
const router = express.Router()
const { clipboard } = require('electron')

const URL = require('../../models/URL')

// create
router.post('/', async (req, res) => {
  const fullURL = req.body.fullURL.trim().toLowerCase()

  // 確認該網址是否已經被創造短網址
  const fullURLCheck = await URL.findOne({ fullURL })

  // create shortURL to database
  if (fullURLCheck == null) {
    await URL.create({ fullURL })
  }

  // render shortURL
  URL.findOne({ fullURL })
    .lean()
    .then(url => {
      let shortURL = url.shortURL
      shortURL = 'https://cryptic-beach-00235.herokuapp.com/url/' + shortURL
      res.render('url', { shortURL, style: 'style.css' })
    })
    .catch(error => console.log(error))
})

// set shortURL route to make it go to full url website
router.get('/:short', async (req, res) => {
  const shortURL = await URL.findOne({ shortURL: req.params.short })

  if (shortURL == null) res.sendStatus(404)

  res.redirect(shortURL.fullURL)
})

module.exports = router
