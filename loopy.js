for(let x = 100; x <= 200; x++) {
  let result = (x % 3 === 0 && x % 4 === 0) ? "LoopyLighthouse" : x % 3 === 0 ? "Loopy" : x % 4 === 0 ? "Lighthouse" : x;
  console.log(result);
}