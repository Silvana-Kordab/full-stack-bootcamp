const fiveNumbers = [1, 2, 3, 4, 5];
const nextThreeNumbers = [6, 7, 8];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

console.log(allNumbers); 

const personalInfo = {
  name: "Silvana",
  age: 21,
  height: "160 cm",
  location: "Jahlieh Al Chouf",
  nationality: "Lebanese"
};
const additionalInfo ={
    occupation: "Website Developer",
    hobby: "unknown",
    education:"undergradute CS student ",
}
const fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);