let input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numberOne = parseInt(lines.shift());
let numberTwo = parseInt(lines.shift());

console.log(`X = ${numberOne + numberTwo}`);