let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

let pointA = lines.shift();
let pointB = lines.shift();

let [x1, y1] = pointA.split(" ");
let [x2, y2] = pointB.split(" ");

x1 = Number(x1);
y1 = Number(y1);
x2 = Number(x2);
y2 = Number(y2);

const distanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4);
};

console.log(distanceBetweenPoints(x1, y1, x2, y2));
