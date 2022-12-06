// //  JavaScript Program to Remove Duplicates From Array

let arr = [1, 2, 3, 4, 2, 3, 4, 2, 3];
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
// let arr = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       count++;
//     }
//     if (count > 0) {
//       console.log(`${arr[i]} appears ${count}`);
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);
