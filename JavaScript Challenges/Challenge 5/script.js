const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

console.log('Menu Child Elements:', menuDiv.children);
console.log('Header Child Elements:', headerElement.children);
console.log('Footer Child Elements:', footerElement.children);

const containerDiv = document.createElement('div');
containerDiv.className = 'container';

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';

containerDiv.appendChild(paragraph);

containerDiv.style.backgroundColor = 'blue';
paragraph.style.color = 'white';
paragraph.style.fontSize = '24px';
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.border = '1px solid black';

const heading1 = document.querySelector('header h1');
const heading3 = document.querySelector('footer h3');

heading1.style.fontStyle = 'italic';
heading3.style.fontStyle = 'italic';
document.body.appendChild(containerDiv);

const colorChangeButton = document.createElement('button');
colorChangeButton.textContent = 'Hover Me';

colorChangeButton.addEventListener('mouseover', function () {
  colorChangeButton.style.backgroundColor = 'red';
});

colorChangeButton.addEventListener('mouseout', function () {
  colorChangeButton.style.backgroundColor = ''; 
});

document.body.appendChild(colorChangeButton);

const buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Clicked Button:', event.target.textContent);
  }
});

const form = document.createElement('form');
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');
const submitButton = document.createElement('button');

nameInput.placeholder = 'Name';
emailInput.placeholder = 'Email';
submitButton.textContent = 'Submit';

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const formData = new FormData(form);
  console.log('Form Data:', Object.fromEntries(formData.entries()));
});

document.body.appendChild(form);

const originalDiv = document.getElementById('original');
const clonedDiv = originalDiv.cloneNode(true); 
clonedDiv.querySelector('p').textContent = 'Cloned'; 


const cloneButton = document.getElementById('clone-btn');
let isClonedDivVisible = false; 

cloneButton.addEventListener('click', function () {
  if (isClonedDivVisible) {
    clonedDiv.style.display = 'none'; 
  } else {
    clonedDiv.style.display = 'block'; 
  }
  isClonedDivVisible = !isClonedDivVisible; 
});


document.body.appendChild(clonedDiv);


const removeHeaderButton = document.createElement('button');
removeHeaderButton.textContent = 'Remove Header';

removeHeaderButton.addEventListener('click', function () {
  const header = document.querySelector('header');
  if (header) {
    header.remove();
  }
});

document.body.appendChild(removeHeaderButton);


function insertElementBeforeFooter(element) {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.parentNode.insertBefore(element, footer);
  }
}

const insertButton = document.createElement('button');
insertButton.textContent = 'Insert Element Before Footer';

insertButton.addEventListener('click', function () {
  const newElement = document.createElement('div');
  newElement.textContent = 'Inserted Element';
  insertElementBeforeFooter(newElement);
});

document.body.appendChild(insertButton);
