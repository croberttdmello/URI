let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');

let numberA = Number(lines.shift());
let numberB = Number(lines.shift());

console.log(`PROD = ${numberA * numberB}`);
