// const { clipboard } = require('electron')

// module.exports = {
//   copy: function (text) {
//     if (text) {
//       clipboard.writeText(text)
//     }
//   },
// }

// Copy to clipboard in node.js
const child_process = require('child_process')
// var ncp = require('copy-paste').global()

module.exports = {
  copy: function (url) {
    // This uses an external application for clipboard access, so fill it in here
    // Some options: pbcopy (macOS), xclip (Linux or anywhere with Xlib)
    // const COPY_APP = 'xclip'
    // const proc = child_process.spawn(COPY_APP)
    // proc.stdin.write(url, { encoding: 'utf8' })
    // proc.stdin.end()
    // console.log('copy')

    // ncp.copy(url)
    console.log(url)

    // const proc = require('child_process').spawn('pbcopy')
    // proc.stdin.write(url)
    // proc.stdin.end()
  },
}
