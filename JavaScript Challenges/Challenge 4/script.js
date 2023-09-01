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


const [firstNum, secondNum, thirdNum] = fiveNumbers;

console.log(firstNum);  
console.log(secondNum); 
console.log(thirdNum);  

//  const { name, location, nationality } = personalInfo;

// console.log(name);    
//  console.log(location);   
//  console.log(nationality);

const personal = {
    name: "sisi",
    contactInfo: {
      email: "silvanakordab16@gmail.com",
      phone: "76082232"
    }
  };
  
  
  const { name, contactInfo: { email, phone } } = personal;
  
  console.log(name);    
  console.log(email);   
  console.log(phone);   

  const [first, second, ...restOfNumbers] = fiveNumbers;

  console.log(first);         
  console.log(second);       
  console.log(restOfNumbers); 

  const obj = {
    name: "celena",
    age: 7,
    location: "Lebanon"
  };
  
  const OBJ = {
    age: 20,
    occupation: "full Stack"
  };
  
  
  const mergedObject = { ...obj, ...OBJ };
  
  console.log(mergedObject);
  







