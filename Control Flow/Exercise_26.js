// Javascript Program to Find the factors of a number
let factorsOfvalue = [];
let factors = (NumValue) => {
  for (let i = 0; i <= NumValue; i++) {
    if (NumValue % i == 0) {
      factorsOfvalue.push(i);
    }
  }
  console.log(factorsOfvalue);
};
factors(12);
