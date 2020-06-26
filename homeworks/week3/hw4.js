var readline = require('readline');
const { timeEnd } = require('console');
const { UV_FS_O_FILEMAP } = require('constants');
const { isIPv4 } = require('net');
const { doesNotReject } = require('assert');
const { isRegExp, isDeepStrictEqual } = require('util');
const { stringify } = require('querystring');
const { realpathSync, watchFile } = require('fs');
const { NOTIMP } = require('dns');
const { isAbsolute } = require('path');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let str = lines[0]
  if(reverse(str)){
    console.log('True')
  } else {
    console.log('False')
  }
}

function reverse(str){
  let nstr =''
  for(let i = str.length -1; i>=0; i--){
    nstr += str[i]
  }
  if(nstr === str){
    return true
  } else {
    return false
  } 
}
