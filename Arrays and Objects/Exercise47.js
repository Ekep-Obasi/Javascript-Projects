// Javascript Program to Convert Objects to Strings
const Student = {
  fname: "Gael",
  lname: "Billson",
  id: 12,
  subjects: {
    maths: 12,
    computerscience: 15,
  },
};
let string = Student.toString();

console.log(string);
