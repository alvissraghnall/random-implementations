

function factors (input) {
  const inputted = Number.parseInt(input);
  let factorsArr = [];
  for(let i = 1; i <= inputted; ++i) {
    inputted % i === 0 ? factorsArr.push(i) : null;
  }
  console.log(factorsArr);
  return factorsArr;
}

function prime_factors (factors) {
  let prime_factors_arr = [];
  const prime_check = [2, 3, 5, 7, 9];
  let bool_arr = [];
  for(let i of factors){
    i === 1 ? bool_arr.push(false) :
    bool_arr.push(prime_check.every(primeCheck => {
      if(i > primeCheck) return i % primeCheck != 0;
      else return true;
    }));
  }
  return bool_arr;
}

console.log(prime_factors(factors(72)));