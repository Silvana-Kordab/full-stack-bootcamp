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