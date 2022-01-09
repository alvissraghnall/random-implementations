const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What number would you like to find the Prime factors of? \n", input => {
  if(isNaN(input)) {
    rl.setPrompt("Please enter a valid number. \n");
    rl.prompt();
    
    rl.on("line", inp => {
      if(isNaN(inp)) {
        rl.setPrompt("Please enter a valid number. \n");
        rl.prompt();
      } else {
        console.log(factors(inp))
        console.log(`The Prime Factors of ${input} are: ${prime_factors(factors(input)).join(",")}`);
        rl.close();
      }
    })
  } else {
    console.log(`The Prime Factors of ${input} are: ${prime_factors(factors(input)).join(",")}`);
    rl.close();
  }
});


function factors(input) {
  const inputted = Number.parseInt(input);
  let factorsArr = [];
  for (let i = 2; i <= inputted; ++i) {
    inputted % i === 0 ? factorsArr.push(i) : null;
  }
  //console.log(factorsArr);
  return factorsArr;
}

function prime_factors(factors) {
  let prime_factors_arr = [];
  for(let i of factors){
    if (isPrime(i)) prime_factors_arr.push(i);
  }
  return prime_factors_arr;
}

function isPrime(num) {
  const prime_check = [2, 3, 5, 7];
  if (num <= 1) return false;
  for(let i of prime_check){
    if(num === i) return true;
    if (num % i === 0) return false;
  }
  return true;
}




//console.log(prime_factors(factors(72)));

//console.log(isPrime(17), isPrime(6), isPrime(33), isPrime(31), isPrime(77), isPrime(83));