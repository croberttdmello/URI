let input = require('fs').readFileSync('../dev/stdin/file.txt','utf8');
let lines = input.split('\n');

let purchaseA = lines.shift().split(' ');
let purchaseB = lines.shift().split(' ');

const totalPrice = (purchaseData) => {
  purchaseData.shift();
  let partAmount = Number(purchaseData.shift());
  let partPrice = Number(purchaseData.shift());
  let amountToPay = partAmount * partPrice;
  return (amountToPay);
}

console.log(`VALOR A PAGAR: R$ ${(totalPrice(purchaseA) + totalPrice(purchaseB)).toFixed(2)}`);
