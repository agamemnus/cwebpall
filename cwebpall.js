let glob = require('glob')
let exec = require('child_process').exec

var pattern = process.argv[2]
var percent = process.argv[3]
if (!percent) percent = 90

var options = {}
glob("./" + pattern, options, function (er, files) {
 files.forEach(function (input) {
  let output = input.substring(0, input.lastIndexOf('.')) + '.webp'
  exec('cwebp -quiet -q ' + percent + ' ' + input + ' -o ' + output)
 })
})