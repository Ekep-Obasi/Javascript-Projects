// JavaScript Program to Find the Sum of Natural Numbers

let SumOfNaturalNumbers = (rangeVal) => {
  let sum = 0;
  for (let i = 0; i <= rangeVal; i++) {
    sum += i;
  }
  console.log(`The sum of numbers from 1-${rangeVal} is ${sum}`);
};
SumOfNaturalNumbers(10);
