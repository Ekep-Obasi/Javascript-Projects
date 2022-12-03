// Javascripy Program to Count the number of Keys/Properties in an Object
const person = {
  fname: "Julius",
  lname: "Caeser",
  nationality: "Cameroonian",
};
let count = 0;
for (let key in person) {
  count++;
}
console.log(`Number of keys/Properties: ${count}`);
