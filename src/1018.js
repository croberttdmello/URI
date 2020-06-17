let input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
let lines = input.split("\n");

console.log(lines[0]);

let valueCash = Number(lines.shift());

let bills = 0;
let valueBills = [100, 50, 20, 10, 5, 2, 1];

valueBills.forEach((valueBill) => {
  bills = Math.floor(valueCash / valueBill);
  valueCash -= bills * valueBill;
  console.log(`${bills} nota(s) de R$ ${valueBill},00`);
});
