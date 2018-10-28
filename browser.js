function makeCanvas() {
  return document.createElement("canvas")
}

var scratchblocks = (window.scratchblocks = module.exports = require("./index")(
  window,
  makeCanvas
))

// add our CSS to the page
var style = scratchblocks.makeStyle()
document.head.appendChild(style)
