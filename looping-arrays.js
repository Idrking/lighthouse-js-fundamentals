const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
for (let prices of amounts) {
  total += prices;
}

console.log("Order total is: " + total);