//10. function for overloading
function overload() {
  if (arguments.length == 0) {
    console.log("You entered no arguments");
  } else if (arguments.length == 1) {
    console.log("You entered one argument");
  } else {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    console.log(
      "You entered more than one argument.",
      "Sum of arguments is:",
      result
    );
  }
}
overload();
overload(1);
overload(1, 2, 3, 4);
