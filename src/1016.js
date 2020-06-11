let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

const distance = Number(lines.shift());
console.log(`${distance * 2} minutos`);
