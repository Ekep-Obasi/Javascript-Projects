// Javascript Program to Clone a JS Object
const object = {
  item: "Piano",
  tradeName: "E-MU",
  tradeNumber: "EM707",
};
// using the Spread synatax
const objectClone = { ...object };

objectClone.SerialNUmber = 1256292732927;

console.log(object);
console.log(objectClone);
