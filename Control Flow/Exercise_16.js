// Javascript Program Find the Factorial of a Number
let genericNumber = 7;
let factorial = genericNumber;
for (let i = 1; i < genericNumber; i++) {
  factorial = factorial * i;
}
console.log(`${genericNumber}! = ${factorial}`);
