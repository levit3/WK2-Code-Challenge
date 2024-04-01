const prompt = require("prompt-sync")();
let firstNumb = parseInt(prompt("Enter the first number: ")); //we prompt the user for the number from where the function begind looking for prime numbers and parse it to ensure its an integer
let secondNumb = parseInt(prompt("Enter the second number: ")); //we prompt the user for the number from where the function stops looking for prime numbers and parse it to ensure its an integer
//a funciton that looks for prime numbers
function findPrime(a, b) {
  let myArray = []; //we declare myArray and assign it an empty array where we will store the prime numbers
  //we create a for statement that itterates from the first number to the last number + 1 in order to include the second number if it is a prime number
  for (let i = a; i < b + 1; i++) {
    let flag = true; //we initialize a flag for each value to be true
    //we use another for statement that starts dividing the current number from 2 until one number below it to see if it has any divisor
    for (let j = 2; j < i; j++) {
      //an if statement that flags any number that has a divisor that leaves no remainder as false
      if (i % j === 0) {
        flag = false;
        break; //we break the loop and start over the process with another number
      }
    }
    //an if statement that logs a number that has no divisor that leaves no remainder and the flag is still true. We also check to ensure it is greater than 1 as 1 is not a prime number
    if (flag === true && i > 1) {
      myArray.push(i); //we push the prime number to the array myArray
    }
  }
  console.log(myArray); //we log the prime numbers once the loop is completed
}
findPrime(firstNumb, secondNumb); //we invoke the function and add firstNumb and secondNumb variables as the arguments
