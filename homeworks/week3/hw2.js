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
  let line = lines[0].split(' ')
  let n = Number(line[0])
  let m = Number(line[1])
  for(i = n; i<=m; i++){
    if(Narcissistic(i)){
      console.log(i)
    }
  }
}

function Narcissistic(n){
  let m = n
  let digit = digitCount(n)
  let sum = 0
  while(m != 0){
    let num = m % 10
    sum += num**digit
    m = Math.floor(m / 10)
  }
  if(sum === n){
    return true
  } else {
    return false
  }
}

function digitCount(n){
  if(n === 0) return 1
  let result = 0
  while(n != 0){
    n = Math.floor(n / 10)
    result ++
  }
  return result
}
