// Javascript Program to Print the Fibonnaci Sequence

let fibonnaci = (rangeVal) => {
  let fibonnaciSequence = [];
  for (let i = 2; i < rangeVal; i++) {
    fibonnaciSequence[0] = 0;
    fibonnaciSequence[1] = 1;
    fibonnaciSequence[i] = fibonnaciSequence[i - 1] + fibonnaciSequence[i - 2];
  }
  console.log(fibonnaciSequence);
};
fibonnaci(10);
