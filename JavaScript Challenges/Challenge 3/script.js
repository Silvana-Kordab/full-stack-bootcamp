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

//   Step 2: Arrow Functions and Scopes
//   Arrow Function
//   Declare an arrow function named squareNumber that takes in one parameter: number. This function should return the square of this number.
  
//   const squareNumber = (number) => number * number;
//   Understanding Scopes
//   Global Scope: Declare a variable globalVar outside any function and assign a value to it. Inside the squareNumber function, 
//try to log the value of globalVar to understand global scope.
//   Local Scope: Inside the squareNumber function, declare a variable localVar and assign a value. Outside the function, try to log localVar to understand the concept of local scope and see the error it produces.
//   Commit: "Challenge 3 - Done with step 2".

const squareNumber1 = (number) => number * number;
const globalVar = "Global";

console.log("Inside squareNumber function:", globalVar);
const squareNumber = (number) => {
  const localVar = "local scope";
  return number * number;
};
//console.log("Outside squareNumber function:", localVar);//3tani error

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  let counter = 10;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

let num = 1;
do {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
} while (num <= 10);


function processArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i]));
    }
    return result;
  }
  

  function multiplier(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  
  


































  