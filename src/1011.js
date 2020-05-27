let input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');
const PI = 3.14159;
let radius = Number(lines.shift());
console.log(`VOLUME = ${(4 / 3 * PI * (Math.pow(radius, 3))).toFixed(3)}`);

