let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

let timeInSeconds = Number(lines.shift());
let hours = Math.floor(timeInSeconds / 3600);
timeInSeconds -= hours * 3600;
let minutes = Math.floor(timeInSeconds / 60);
timeInSeconds -= minutes * 60;

console.log(`${hours}:${minutes}:${timeInSeconds}`);
