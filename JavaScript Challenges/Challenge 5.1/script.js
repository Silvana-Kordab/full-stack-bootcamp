
const button = document.createElement("button");
button.textContent = "Click Me";

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";


button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  button.style.backgroundColor = "red";
  button.style.color = "white";

  button.textContent = `Clicked ${randomNumber}!`;
  alert("Button Clicked!");
});

document.body.appendChild(button);


const h1 = document.createElement("h1");
h1.textContent = "Header";


h1.style.border = "10px dotted green";
h1.style.display = "inline-block";


document.body.appendChild(h1);

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case 'a':
     
      h1.style.backgroundColor = "red";
      break;
    case 's':
     
      const currentLeft = parseInt(getComputedStyle(h1).left) || 0;
      h1.style.left = currentLeft + 10 + "px";
      break;
    case 'd':

      const newParagraph = document.createElement("p");
      newParagraph.textContent = "Key D was pressed!";
      document.body.appendChild(newParagraph);
      break;
    case 'w':
   
      h1.style.display = h1.style.display === "none" ? "block" : "none";
      break;
    case ' ':
     
      const currentSize = parseInt(getComputedStyle(h1).fontSize) || 16;
      h1.style.fontSize = (currentSize + 5) + "px";
      break;
  }
});

const form = document.createElement("form");

const fullNameLabel = document.createElement("label");
fullNameLabel.textContent = "Full Name:";
const fullNameInput = document.createElement("input");
fullNameInput.type = "text";
fullNameInput.name = "fullName";
fullNameInput.required = true;

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email Address:";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.required = true;

const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.required = true;

const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.textContent = "Confirm Password:";
const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.type = "password";
confirmPasswordInput.name = "confirmPassword";
confirmPasswordInput.required = true;
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(fullNameLabel);
form.appendChild(fullNameInput);
form.appendChild(document.createElement("br"));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
document.body.appendChild(form);



























