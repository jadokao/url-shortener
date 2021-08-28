const express = require('express')
const router = express.Router()

const URL = require('../../models/URL')

const { nanoid } = require('nanoid')

// create
router.post('/', async (req, res) => {
  const fullURL = req.body.fullURL.trim().toLowerCase()

  // 確認原始網址是否已經被創造短網址
  const fullURLCheck = await URL.findOne({ fullURL })

  // // 如果原始網址還沒有建立短網址
  if (fullURLCheck == null) {
    // if not, create shortURL to database
    await URL.create({ fullURL })

    // 確認創造後的短網址是否重複
    // 從資料庫取得依據原始網址所建立的短網址，如果資料庫沒有則回傳null
    let shortOutcome = ''
    await URL.findOne({ fullURL }).lean().then(url => {
      url ? (shortOutcome = url.shortURL) : (shortOutcome = null)
    })

    // 找是否有：1.已經在資料庫，跟2.剛才建立的，兩個有著重複短網址的原始網址
    let repeatURL = []
    await URL.find({ shortURL: shortOutcome }).lean().then(urls => {
      urls.forEach(url => repeatURL.push(url))
    })

    // 如果剛建立的短網址，已經在資料庫找到(有一個以上的短網址是重複的)
    while (repeatURL.length != 1) {
      console.log('have repeated')
      // 依據想要建立短網址的原始網址，把舊的換掉
      await URL.findOne({ fullURL }).then(async url => {
        url.shortURL = nanoid(5)
        await url.save()
      })

      // 找到剛再次建立的短網址
      await URL.findOne({ fullURL }).lean().then(url => {
        url ? (shortOutcome = url.shortURL) : (shortOutcome = null)
      })

      // 再次檢查
      repeatURL = []
      await URL.find({ shortURL: shortOutcome }).lean().then(urls => {
        urls.forEach(url => repeatURL.push(url))
      })
    }
  }

  // render shortURL
  URL.findOne({ fullURL })
    .lean()
    .then(url => {
      let shortURL = url.shortURL
      shortURL = 'https://ming-url-shortener.herokuapp.com/url/' + shortURL
      res.render('url', { fullURL, shortURL, style: 'style.css' })
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
