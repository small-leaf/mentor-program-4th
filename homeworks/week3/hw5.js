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
  let m = Number(lines[0])
  for(let i =1; i<=m; i++){
    let [a, b, k] = lines[i].split(' ')
    console.log(judge(a, b, k))
  }
}

function judge(a, b, k){
  let aLength = BigInt(a)
  let bLength  = BigInt(b)
  if(aLength === bLength) return 'DRAW'
  if(k == 1){
    return  (aLength > bLength)?'A':'B'
  } else if(k == -1){
    return  (aLength > bLength)?'B':'A'
  }
}
