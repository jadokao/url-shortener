// const { clipboard } = require('electron')

// module.exports = {
//   copy: function (text) {
//     if (text) {
//       clipboard.writeText(text)
//     }
//   },
// }

const clipboardy = require('clipboardy')

module.exports = {
  copyURL: function (text) {
    if (text) {
      clipboardy.write(text)
    }
  },
}
