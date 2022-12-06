// JavaScript Program to Remove Specific Item From an Array
let fruits = ["pear", "Banana", "apples", "rice", "cherries"];
console.log(fruits);
// we remove rice from the array of fruits
fruits.splice(3, 1);

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "rice") {
    splice(i, 1);
  }
}
console.log(fruits);