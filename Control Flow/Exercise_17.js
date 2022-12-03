// Javascript Program to Display the Multiplication timetable

let MultipTimetable = (number, times) => {
  let Multiplatedvalues = [];

  for (let i = 1; i <= times; i++) {
    let computedVal = number * i;
    Multiplatedvalues.push(computedVal);
  }
  console.log(`*The ${number} timetable*`);
  for (let i = 0; i < Multiplatedvalues.length; i++) {
    console.log(`   ${number} * ${i + 1} = ${Multiplatedvalues[i]}`);
  }
};

MultipTimetable(4, 12);
