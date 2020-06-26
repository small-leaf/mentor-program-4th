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
  let arr =[]
  for(let i = 0; i<lines.length;i++){
    arr.push(Number(lines[i]))
  }
  for(let i = 1; i<arr.length;i++){
    if(isPrime(arr[i])){
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

function isPrime(n){
  if(n === 1) return false
  for(let i = 2; i<n; i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}
