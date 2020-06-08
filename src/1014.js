let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8"); 
let lines = input.split("\n");

let distance = Number(lines.shift());
let spentFuel = Number(lines.shift());

console.log(`${(distance/spentFuel).toFixed(3)} km/l`);

