function factors(input) {
  const inputted = Number.parseInt(input);
  let factorsArr = [];
  for (let i = 2; i <= inputted; ++i) {
    inputted % i === 0 ? factorsArr.push(i) : null;
  }
  console.log(factorsArr);
  return factorsArr;
}

function prime_factors(factors) {
  let prime_factors_arr = [];
  let bool_arr = [];
  for(let i of factors){
    if (isPrime(i)) prime_factors_arr.push(i);
  }
  return prime_factors_arr;
}

function isPrime(num) {
  const prime_check = [2, 3, 5, 7, 9];
  if (num <= 1) return false;
  for(let i of prime_check){
    if (num % i === 0) return false;
  }
  return true;
}

console.log(prime_factors(factors(72)));

console.log(isPrime(17), isPrime(6), isPrime(33), isPrime(31), isPrime(77), isPrime(83));