function collatz(num) {
  let _num = parseInt(num);
  if (_num <= 1 || isNaN(_num)) throw new Error("Invalid argument. Enter a number greater than 1.");
  let steps = 0;
  while (_num > 1) {
    if (_num % 2 === 0) _num /= 2;
    else _num = _num * 3 + 1;
    steps++;
    console.log(_num, steps);
  }
  return steps;
}

let num = prompt("Please enter a number...")
console.log(collatz(num));