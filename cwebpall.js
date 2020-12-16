#!/usr/bin/env node

let glob = require('glob')
let exec = require('child_process').exec

var pattern = process.argv[2]
var percent = process.argv[3]
var outputDirectory = process.argv[4]
if (!percent) percent = 90
if (!outputDirectory) outputDirectory = ""
var options = {}
glob("./" + pattern, options, function (er, files) {
 files.forEach(function (input) {
  let output = input.substring(0, input.lastIndexOf('.')) + '.webp'
  exec('cwebp -quiet -q ' + percent + ' ' + input + ' -o ' + outputDirectory + output)
 })
})
