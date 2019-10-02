module.exports = function multiply(first, second) {
  let result;
  result = BigInt (first)* BigInt(second);
  
  return String (result);
}
