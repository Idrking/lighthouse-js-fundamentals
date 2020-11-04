const loopyLighthouse = (range, multiples, words) => {
  for(let x = range[0]; x <= range[1]; x++) {
    let result = (x % multiples[0] === 0 && x % multiples[1] === 0) ? words[0] + words[1] : x % multiples[0] === 0 ? words[0] : x % multiples[1] === 0 ? words[1] : x;
    console.log(result);
  }
}