// Javascript Program to create Objects in different ways
// Using Object Literals
let Entity = {
  nameOfEntity: "John",
  height: "1,75 m",
  weight: "75 kg",
  Religion: "Muslim",
  idNumber: "KIT032",
};
let idNumber = Symbol("id");
console.log(Entity);
// Using Object Constructor

function Person(fname, lname, email) {
  this.FirstName = fname;
  this.Surname = lname;
  this.Email = email;
}
let person1 = new Person("Arrey-Etta", "Ekep", "arreyettaekep@gmail.com");
console.log(person1);
