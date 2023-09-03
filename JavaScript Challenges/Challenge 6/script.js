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
    alert(message);
    return "Chained message!";
  })
  .then((chainedMessage) => {
    console.log(chainedMessage); 
  });

  function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const randomSuccess = Math.random() < 0.5; 
        if (randomSuccess) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000); 
    });
  }

  simulateNetworkRequest()
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    async function fetchPost() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          const data = await response.json();
          console.log("Fetched post:", data);
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
      
      fetchPost();
      
  
      async function fetchMultiplePosts() {
        const postIds = [1, 2, 3];
        const fetchPromises = postIds.map((postId) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        );
      
        try {
          const responses = await Promise.all(fetchPromises);
          const dataPromises = responses.map((response) => response.json());
          const postData = await Promise.all(dataPromises);
      
          console.log("Combined Data:", postData);
        } catch (error) {
          console.error("Error:", error);
        }
      }
     
      fetchMultiplePosts();
      
      async function fetchSequentialPosts() {
        const postIds = [4, 5, 6, 7, 8];
        const postData = [];
      
        for (const postId of postIds) {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch post ${postId}`);
            }
            const data = await response.json();
            postData.push(data);
            console.log(`Fetched post ${postId}:`, data);
          } catch (error) {
            console.error(error.message);
          }
        }
      
        console.log("Sequentially Processed Data:", postData);
      }
      
     
      fetchSequentialPosts();