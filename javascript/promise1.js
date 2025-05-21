const sayHello = new Promise((resolve, reject) => {
    // Simulate an async task with a 2-second delay.
    setTimeout(() => {
      // After 2 seconds, we consider the task done.
      resolve("Hello, world!");
      // If something went wrong, you might call:
      // reject("Something went wrong!");
    }, 2000);
  });
   
  // Using the promise with `.then()` and `.catch()`
  sayHello
    .then((message) => {
      console.log("Resolved with message:", message);
    })
    .catch((error) => {
      console.error("Rejected with error:", error);
    });