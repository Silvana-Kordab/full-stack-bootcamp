// Declare a variable age and assign your age as a value.
// Using an if else statement, check whether the age is greater than or equal to 20.
// If yes, log to the console: "You can enter this room."
// If no, log to the console: "You can't enter this room."

var age= 20;
if (age >= 20)
 {console.log("You can enter this room.")}
else
 console.log("You can't enter this room.");


const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log("Expression 1:", expression1);
console.log("Expression 2:", expression2);
console.log("Expression 3:", expression3);
console.log("Expression 4:", expression4);

const ageDri = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (ageDri >= 18 && hasDriverLicense) {
  canDrive = true;
}

let canRentCar = false;
if (ageDri >= 22 && hasDriverLicense && !hasCar) {
  canRentCar = true;
}

let needDriver = false;
if (ageDri < 18 && !hasDriverLicense && !hasCar) {
  needDriver = true;
}

console.log("canDrive:", canDrive);
console.log("canRentCar:", canRentCar);
console.log("needDriver:", needDriver);
