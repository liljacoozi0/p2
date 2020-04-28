// jshint esversion: 7
//lab exercise: this function returns a string that
//contains a form letter
function formLetter(fName, lName) {
  return `Hello, ${fName} ${lName},
  Imagine how surprised your neighbors will be when
  the Publisher Clearing House van drives up to your
  house, and unloads $2,000,000!`; //output 2 lines with backticks
}
console.log(formLetter("Susan", "Queue"));
console.log(formLetter("Alex", "Levesque"));

function formLetter2(fName, lName, city, state) {
  return `Hello, ${fName} ${lName},
  Imagine how surprised your neighbors will be when
  the Publisher Clearing House van drives up to your
  house in ${city}, ${state}, and unloads $2,000,000!`;
}
console.log(formLetter2("Susan", "Queue", "Eugene", "OR"));
console.log(formLetter2("Alex", "Levesque", "Anchorage", "AK"));
