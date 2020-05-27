let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');
lines.shift();
const salary = Number(lines.shift());
const totalSales = Number(lines.shift());
const finalSalary = (salary + (15/100*totalSales));
console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);
