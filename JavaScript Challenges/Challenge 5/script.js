
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
