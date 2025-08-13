1️⃣ Callbacks
What is a Callback?
A callback is a function passed as an argument to another function, so it can be executed later.

Mostly used for asynchronous tasks (e.g., fetching data, reading files, timers).

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the function passed
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Nargis", sayBye);
Hello Nargis
Goodbye!
console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout (after 2 seconds)");
}, 2000);

console.log("End");
📌 Tip: setTimeout ka function later run hota hai → that's why callback is used.

Problem with Callbacks – Callback Hell
When callbacks are nested inside callbacks → code becomes messy.
doTask1(function() {
  doTask2(function() {
    doTask3(function() {
      console.log("All done!");
    });
  });
});
This is called Pyramid of Doom — hard to read & maintain.

2️⃣ Promises
What is a Promise?
A Promise is an object that represents the future value of an asynchronous operation.
Definition: An object representing a value that will be available in the future (success or failure).
It can be:

Pending → operation running

Fulfilled → success (resolve)

Rejected → failure (reject)
syntax
let myPromise = new Promise(function(resolve, reject) {
  // async task
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});
Consuming a Promise:
myPromise
  .then(function(result) {
    console.log(result); // runs if resolved
  })
  .catch(function(error) {
    console.log(error); // runs if rejected
  })
  .finally(function() {
    console.log("Promise finished");
  });
Example – Fetching Data
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.log(err));
3️⃣ Callback vs Promise – Simple Analogy
Callback → "I’ll call you when the work is done."

Promise → "I promise to give you a result in the future — either success or failure."
4️⃣ Promise Chaining
doTask1()
  .then(result1 => doTask2(result1))
  .then(result2 => doTask3(result2))
  .catch(error => console.log(error));
📌 Advantage: Cleaner code compared to callback hell.