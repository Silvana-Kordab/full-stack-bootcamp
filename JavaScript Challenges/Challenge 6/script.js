setTimeout(function () {
    console.log("Hello after 5 seconds!");
  }, 5000); 

  function updateClock() {
    const currentTime = new Date();
    console.log(`Current Time: ${currentTime.toLocaleTimeString()}`);
  }
  
  setInterval(updateClock, 1000); 

  const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000); 
  });
  
  delayedPromise.then((message) => {
    console.log(message); 
  });
  
  delayedPromise
  .then((message) => {
    alert(message); // Shows an alert with "Promise resolved!"
    return "Chained message!";
  })
  .then((chainedMessage) => {
    console.log(chainedMessage); // Logs "Chained message!"
  });

  