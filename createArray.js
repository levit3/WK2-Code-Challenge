const prompt = require("prompt-sync")();
let firstNum = parseInt(prompt("Enter the first number: ")); //propmt the user for the first number and parse it to ensure its an integer
let secondNum = parseInt(prompt("Enter the second number: ")); //prompt the user for the second number and parse it to ensure its an integer
//a function that creates an array of numbers starting from the first number input bu the user to the last number
function arrayCreator(a, b) {
  let i = a; // initialize the variable i to be a counter
  myArray = []; //we declare myArray and assign it an empty array
  while (i < b + 1) {
    //while loop that checks if the i counter is less than the second number plus 1 in order to capture the second number inputed in the results and only stops if i === b
    myArray.push(i); //we push the variable in i to the array
    i++; //we add to the counter to avoid an infinite loop
  }
  console.log(myArray); //we log the final array once the finction is complete
}

arrayCreator(firstNum, secondNum); //invoke the function and adds firstNum and secondNum variables as arguments
