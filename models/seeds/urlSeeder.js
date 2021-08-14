const URL = require('../URL')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongoDB connected!')
  URL.create({ fullURL: 'https://www.google.com/' })
  URL.create({ fullURL: 'https://www.facebook.com/' })
  URL.create({ fullURL: 'https://developer.mozilla.org/en-US' })
  console.log('URL creation done')
})
