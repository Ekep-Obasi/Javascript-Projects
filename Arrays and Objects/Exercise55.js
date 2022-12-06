//  JavaScript Program to Empty an Array

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  delete arr[i];
}
console.log(arr);
