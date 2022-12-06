// JavaScript Program to Check if An Object is An Array

let arr = [1, 2, (fruits = { name: "banana", rating: 3 }), "stone"];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "object") {
    count++;
  }
}
if (count > 0) {
  console.log(" Array contains an object ");
}
