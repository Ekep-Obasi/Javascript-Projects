// Javascript Program to Solve Quadratic Equations
let a = 1;
let b = 5;
let c = 30;
let delta = b * b - 4 * a * c;

  if (delta == 0){
  let x = -b / (2 * a);
  console.log(`The quadratic has a unique solution which is: ${x}`);
   } 

  else if (delta < 0) {
  console.log("This quadratics has complex solutions");
  }

 else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(
    `This quadratic equation has two roots which are ${x1} and ${x2}`
  );
  }
