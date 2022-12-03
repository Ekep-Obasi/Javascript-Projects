// Javascript Program to check if a key exist in an Object

const citizen = {
  fname: "Andrew",
  age: 28,
  id: 12,
};

const hasKey = citizen.hasOwnProperty("fname");

if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist");
}
