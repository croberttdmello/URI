let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');

let notaA = Number(lines.shift());
let notaB = Number(lines.shift());
let notaC = Number(lines.shift());
let media = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);

