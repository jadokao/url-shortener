const express = require('express')
const router = express.Router()

const URL = require('../../models/URL')
// Copy to clipboard in node.js
const child_process = require('child_process')

// create
router.post('/', async (req, res) => {
  const fullURL = req.body.fullURL.trim().toLowerCase()

  // 確認原始網址是否已經被創造短網址
  const fullURLCheck = await URL.findOne({ fullURL })

  // 如果原始網址還沒有建立短網址
  if (fullURLCheck == null) {
    // if not, create shortURL to database
    await URL.create({ fullURL })

    // 確認創造後的短網址是否重複
    // 取得依據原始網址所建立的短網址
    let shortOutcome = ''
    await URL.findOne({ fullURL }).lean().then(url => {
      shortOutcome = url.shortURL
    })
    // 檢查剛建立的短網址是否已在資料庫裡面
    let shortURLCheck = await URL.findOne({ shortURL: shortOutcome })
    // 如果剛建立的短網址，已經在資料庫找到
    while (shortURLCheck != null) {
      // 刪除舊的並建立新的短網址
      await URL.findOne({ fullURL }).then(url => url.remove())
      await URL.create({ fullURL })

      // 找到剛建立的短網址，並再次檢查
      await URL.findOne({ fullURL }).lean().then(url => {
        shortOutcome = url.shortURL
      })
      shortURLCheck = await URL.findOne({ shortURL: shortOutcome })
    }
  }

  const copy = function (url) {
    // This uses an external application for clipboard access, so fill it in here
    // Some options: pbcopy (macOS), xclip (Linux or anywhere with Xlib)
    const COPY_APP = 'xclip'
    const proc = child_process.spawn(COPY_APP)
    proc.stdin.write(url, { encoding: 'utf8' })
    proc.stdin.end()
    console.log('copy in js')
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
