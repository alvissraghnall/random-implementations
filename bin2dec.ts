
function bin2dec(binaryString: string): number {
  if(!isValidBinary(binaryString)) {
    throw new Error("Enter a valid Binary string.")
  }
  const mPV = binaryString.length - 1;
  let x = 0;
  for(let i = 0, j = mPV; i <= mPV; ++i, j--){
    x += parseInt(binaryString[i]) * 2**j;
    //console.log(i, j, x);
  }
  return x;
}

function isValidBinary(binStr: string): boolean {
  for(let i = 0; i < binStr.length; i++){
    if (binStr[i] !== "0" && binStr[i] !== "1") { return false; } 
    return true;
  }
}

function dec2bin(dec: number){
  if(isNaN(dec)) throw new TypeError("Enter a valid number.");
  const binArr: number[] = [];
  let vrb = dec;
  while(vrb >= 1){
    binArr.push(Math.floor(vrb) % 2);
    vrb = Math.floor(vrb / 2);
  }
  let binaryString = binArr.reverse().join("");
  return binaryString;
}

console.log(bin2dec("101100111001100011110"), parseInt("101100111001100011110", 2));
console.log(dec2bin(1471262));