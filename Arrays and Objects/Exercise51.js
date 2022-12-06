// JavaScript Program to Check if An Array Contains a Specified Value
let arr = [1, 23, 56, 78, 5, 87, 34, 5, 676];
let wantedValues = 87;
let found = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == wantedValues) {
    found++;
  }
}
if (found == 1) {
  console.log(`Array contains ${wantedValues}`);
} else {
  console.log(`Array does not contain ${wantedValues}`);
}
