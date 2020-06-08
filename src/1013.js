let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

let [A, B, C] = lines[0].split(" ");

A = Number(A);
B = Number(B);
C = Number(C);

const maiorAB = (numA, numB) => {
  let largest = ((numA + numB + Math.abs(numA - numB)) / 2);
  return largest;
}

let largest = maiorAB(A, B);
largest = maiorAB(largest, C);

console.log(`${largest} eh o maior`);

