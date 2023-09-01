const button = document.getElementById("Button");
button.textContent = "Click Me";

button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;


      button.style.backgroundColor = "red";
      button.style.color = "white";

     
      button.textContent = `Clicked ${randomNumber}!`;
    alert("Button Clicked!");
  });

  document.body.appendChild(button);
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.backgroundColor = "#3498db";
  button.style.color = "#ffffff";
  button.style.border = "none";
  button.style.cursor = "pointer";
