// jshint esversion: 7
//lab exercise: receives any first name and last name
//and returns a welcome message. Uses backticks to
//demonstrate template literals and interpolation.
function greetByFullName(fName, lName) {
  return `Hello, ${fName} ${lName}!
Welcome to JavaScript!`; //output 2 lines with backticks
}
console.log("Alex", "Levesque");
console.log("Mike", "Tythson");
