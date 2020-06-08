let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");
let [A, B, C] = lines[0].split(" ");
const PI = 3.14159;
A = Number(A);
B = Number(B);
C = Number(C);

console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(PI * Math.pow(C, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A + B) * C) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);
