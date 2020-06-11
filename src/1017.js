let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

const timeSpent = Number(lines.shift());
const averageSpeed = Number(lines.shift());

const travelledDistance = timeSpent * averageSpeed;
console.log(`${(travelledDistance/12).toFixed(3)}`);
