// JavaScript Program to Convert Objects to Strings
let human = {
  name: "Ojong Jeniffer",
  surname: "Boston",
  Nationality: "Cameroonian-American",
  Pronouns: "she, her",
};
let string = JSON.stringify(human);
console.log(string);
console.log(typeof string);
