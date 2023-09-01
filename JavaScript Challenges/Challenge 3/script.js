function addNumbers(num1, num2) {
    return num1 + num2;
  }
const result1 = addNumbers(5, 3);
const result2 = addNumbers(-9, 8);
console.log("Result :", result1);
console.log("Result :", result2); 

// Create a function named findMax that takes two numbers as parameters and returns the larger number. If they're equal, it should return "Both are equal".

function findMax(a, b) {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return "Both are equal";
    }
  }
console.log(findMax(5, 3)); 
console.log(findMax(8, 12)); 
console.log(findMax(7, 7)); 
// Nested Function
// Write a function named compute that takes three parameters: 
// num1, num2, and operation. Inside this function, declare another
//  function for each arithmetic operation (add, subtract, multiply, divide).
//   The operation parameter will decide which inner function to run.

// Commit: "Challenge 3 - Done with step 1".

function compute(num1, num2, operation) {
    let result;
  
    function add() {
      result = num1 + num2;
    }
    
    function subtract() {
      result = num1 - num2;
    }
  
    function multiply() {
      result = num1 * num2;
    }
  
    function divide() {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
    }
  
    switch (operation) {
      case "add":
        add();
        break;
      case "subtract":
        subtract();
        break;
      case "multiply":
        multiply();
        break;
      case "divide":
        divide();
        break;
      default:
        result = "Invalid operation";
    }
  
    return result;
  }
  
  console.log(compute(5, 3, "add")); 
  console.log(compute(8, 3, "subtract"));
  console.log(compute(4, 7, "multiply")); 
  console.log(compute(10, 2, "divide")); 
  console.log(compute(5, 0, "divide")); 
  console.log(compute(5, 3, "power")); 
  