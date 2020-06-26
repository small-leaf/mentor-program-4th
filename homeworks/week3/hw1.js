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
printStar(Number(lines[0]))
}

function printStar(num){
  for(let i = 1; i <= num; i++){
   let s = ''
   for(let j = 1; j<= i; j++){
     s += '*'
     }
     console.log(s) 
   }
 }
