//4.factorial of numbers using recursion
function factorial(factNumber) {
  if (factNumber == 0) {
    return 1;
  } else {
    return factNumber * factorial(factNumber - 1);
  }
  console.log(`${factNumber}=`, factorial(factNumber));
}
console.log(factorial(5));