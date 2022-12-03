// Javasript Program to merge Properties of Two Objects
let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four"];
for (let i of arr2) {
  console.log(i);
}
let sum = (a, b) => {
  console.log(a + b);
};
sum(3, 4);

let person = {
  fname: "Billy",
  email: "Billy1998@gmail.com",
  phoneNumber: +237671216801,
};
let { fname, email, phoneNumber } = person;
fname = "ben";
console.log(fname);
