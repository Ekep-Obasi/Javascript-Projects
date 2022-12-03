// Javascript Program to Check the largest Amongst 3 numbers
let arryOfNumbers = [120, 67, 23];
let largest = arryOfNumbers[0];
for (let i = 0; i < arryOfNumbers.length; i++) {
  // Using Tenary operators
  largest = largest > arryOfNumbers[i] ? largest : arryOfNumbers[i];
}
console.log(`The largest Number is ${largest}`);
