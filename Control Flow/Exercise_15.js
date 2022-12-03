// Javascript Program that Prints all Prime Numbers in an interval
let upperBoundOfInterval = 40;
let lowerBoundOfInterval = 1;
let arrayOfPrimeNumbers = [];

for (let i = lowerBoundOfInterval; i < upperBoundOfInterval; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
      // console.log(count);
    }
  }
  if (count == 2) {
    arrayOfPrimeNumbers.push(i);
  }
}
console.log(arrayOfPrimeNumbers);

//Finally!!!
