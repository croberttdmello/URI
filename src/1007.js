let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');

let numberA = Number(lines.shift());
let numberB = Number(lines.shift());
let numberC = Number(lines.shift());
let numberD = Number(lines.shift());

let difference = (numberA * numberB - numberC * numberD);
console.log(`DIFERENCA = ${difference}`);
