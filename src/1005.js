let input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let numberA = Number(lines.shift());
let numberB = Number(lines.shift());

let media = (((numberA * 3.5) + (numberB * 7.5)) / 11).toFixed(5);

console.log((`MEDIA = ${media}`));
