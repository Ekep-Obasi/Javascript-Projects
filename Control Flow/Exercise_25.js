// JavaScript Program to Find LCM

let gdcFunction = (value1, value2) => {
  let lcm;
  let maxVal = value1 < value2 ? value2 : value1;
  for (let i = 2; i < maxVal; i++) {
    if (value1 % i == 0 && value2 % i == 0) {
      lcm = i;
      break;
    }
  }
  console.log(`The GCD of ${value1} and ${value2} is: ${lcm}`);
};
gdcFunction(12, 16);
