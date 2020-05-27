let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');

let number = Number(lines.shift());
let workHours = Number(lines.shift());
let hourPrice = Number(lines.shift());

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${(workHours * hourPrice).toFixed(2)}`);

