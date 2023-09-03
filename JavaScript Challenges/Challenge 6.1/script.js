function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  

  delay(2000) 
    .then(() => {
      console.log("Promise resolved after 2 seconds!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  