// Javascript Program to Find GCD or HCF

let gdcFunction = (value1, value2) => {
  let gcd;
  let minVal = value1 < value2 ? value1 : value2;
  for (let i = 0; i <= minVal; i++) {
    if (value1 % i == 0 && value2 % i == 0) {
      gcd = i;
    }
  }
  console.log(`The GCD of ${value1} and ${value2} is: ${gcd}`);
};
gdcFunction(16, 12);
