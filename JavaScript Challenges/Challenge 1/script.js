console.log('I am linked now!');
// Inside the JS file, declare a variable name.
// Assign your name as the value for the name variable.
// Display the value of the variable in an alert box.

var name="Silvana";
alert("My name is: " + name);

// Declare 3 variables (age, lastName, DOB) using 3 different declaration methods.
// Assign appropriate values to each variable.
// Experiment with changing variable values.
// Log all 3 variables to the console.
// Compare the outcomes of the three declaration methods.
// Commit: "Challenge 1 - Done with Step 3"

var age=20;
let lastName="Kordab";
const DOB= "2003-06-5";//const cant be assignned l2na bdal constant w ma btet8yar 

age=21;
lastName="Abou Diab";

console.log(name+ "'s age: " + age);
console.log("family name:", lastName);
console.log("Date Of Birth:", DOB);

// og the data types of the following values to the console:
// "This is a text"
// true
// false
// 1215
// "999"
// {}
// []
// null
// undefined

console.log("Data types:");
console.log("Type of 'This is a text':", typeof "This is a text");
console.log("Type of true:", typeof true);
console.log("Type of false:", typeof false);
console.log("Type of 1215:", typeof 1215);
console.log("Type of '999':", typeof "999");
console.log("Type of {}: ", typeof {});
console.log("Type of []:", typeof []);
console.log("Type of null:", typeof null);
console.log("Type of undefined:", typeof undefined);

// Declare 6 variables and assign them different data types.
// Log each variable along with its data type.

var number = 26;
var string = "java script!";
var boolean = true;
var object = { key: "value" };
var array = [5, 6, 8];
var nullv = null;

console.log("Variable data types:");
console.log("Type of numberVar:", typeof number, "Value:", number);
console.log("Type of stringVar:", typeof string, "Value:", string);
console.log("Type of booleanVar:", typeof boolean, "Value:", boolean);
console.log("Type of objectVar:", typeof object, "Value:", object);
console.log("Type of arrayVar:", typeof array, "Value:", array);
console.log("Type of nullVar:", typeof nullv, "Value:", nullv);

// Declare a variable myText and assign a string value to it.
var myText = "Hello, ,my name is Silvana!";

// Use three different ways to declare strings: double quotations, single quotations, and backticks.
const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
  'This is my text using single quotations "' + counter + '" times';
const doubleQuote =
  "This is my text using double quotations  \"" + counter + "\" times";


  console.log("myText:", myText);
  console.log("backtick:", backtick);
  console.log("singleQuote:", singleQuote);
  console.log("doubleQuote:", doubleQuote);
  //note i corrcted the way of each declaration

// Declare two string variables
var string1 = "Silvana ";
var string2 = "Celena";

// Concatenate the values of the first two variables and store the result in a new variable
var result = string1 + string2;

console.log("Result:", result); // "Silvana Celena "

var num = 5;
var str = "5";
var bool = true;

console.log(num === str); 
console.log(num !== str);
console.log(num == str); 
console.log(num != str); 

console.log(num > str);   
console.log(num >= str);  
console.log(num < str);   
console.log(num <= str);  

console.log(num === bool); 
console.log(num !== bool); 
console.log(num == bool);  
console.log(num != bool); 






