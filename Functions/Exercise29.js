// JavaScript Program to Find Sum of Natural Numbers Using Recursion
let SumOfNaturalNumbers = (uppBoundOfInterval) => {
  if (uppBoundOfInterval == 0) {
    return 0;
  } else {
    return uppBoundOfInterval + SumOfNaturalNumbers(uppBoundOfInterval - 1);
  }
};
console.log(SumOfNaturalNumbers(10));
