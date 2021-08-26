// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// module.exports = {
//   copy: function () {
//     const dom = new JSDOM(
//       `<button type="button" id="copy" class="btn btn-primary" onclick="{{#copy shortURL}}{{/copy}}">Handlebars-helper: Copy</button>`
//     )
//     const document = dom.window.document
//     /* Get the text */
//     var copyText = document.getElementById('copy').innerHTML
//     /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText)
//     console.log('copy')
//   },
// }
