const range = (start, end, step) => {
  if (step === undefined || start === undefined || end === undefined) {
    return [];
  }

  if (start > end || step <= 0) {
    return [];
  }

  const numbers = [];

  for (let i = start; i <= end; i += step) {
    numbers.push(i);
  }

  return numbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));