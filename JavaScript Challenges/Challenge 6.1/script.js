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
  
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Random Fact:", data.text);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

  async function fetchRandomFact() {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const data = await response.json();
      console.log("Random Fact:", data.text);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchRandomFact();
  const imageUrls = [
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random"
  ];
  
  const fetchPromises = imageUrls.map((url) => fetch(url));
  
  Promise.all(fetchPromises)
    .then((responses) => {
      const imagePromises = responses.map((response) => response.json());
      return Promise.all(imagePromises);
    })
    .then((images) => {
      console.log("Fetched Dog Images:", images);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  