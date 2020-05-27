let input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

const PI = 3.14159;
let radius = lines.shift();
let area = PI * (radius * radius);

console.log("A=" + area.toFixed(4));