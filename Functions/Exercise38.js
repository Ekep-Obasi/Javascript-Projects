//8. Checks if variable is of fuction type
function variableFunctiontype(variable) {
  if (typeof variable === "function") {
    console.log("variable is of function type");
  } else {
    console.log("variable is not of funciton type");
  }
}
const choice = true;
let x = function () {
  console.log("I am of function type");
};
variableFunctiontype(x);
variableFunctiontype(choice);
