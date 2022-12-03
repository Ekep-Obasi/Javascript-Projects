// Program to Check Prime Numbers
let randomNumber = 29;
let arryOfPrimeNumbers = [];
let count = 0;

for (let i = 1; i <= randomNumber; i++) {
  if (randomNumber % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(`${randomNumber} is Prime`);
} else if (randomNumber == 1) {
  console.log(`${randomNumber} is Prime`);
} else {
  console.log(`${randomNumber} is not Prime`);
}
