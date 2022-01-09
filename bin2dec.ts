
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

console.log(bin2dec("101100111001100011110"), parseInt("101100111001100011110", 2));