Asynchronous means:

Tasks can start, run in the background, and finish later, without blocking the rest of the program.

2️⃣ Synchronous vs Asynchronous
Synchronous (One by One – Blocking)
Code runs line-by-line.

Next task waits until the current one finishes.
ex:console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
Task 1
Task 2
Task 3
Asynchronous (Parallel Feel – Non-Blocking)
Some tasks take time (like fetching data, timers).

They run in the background while the rest of the code keeps going.

Example:console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (after 2s)");
}, 2000);

console.log("Task 3");
Task 1
Task 3
Task 2 (after 2s)
📌 Notice: Task 3 runs before Task 2 because Task 2 was asynchronous.

3️⃣ Why Asynchronous?
Some operations take time:

API requests

File reading

Database queries

Timers

If JS was fully synchronous, the whole page would freeze while waiting.

5️⃣ Ways to Handle Asynchronous Code
Callbacks → Old method

Promises → Better readability

Async/Await → Looks like synchronous but works asynchronously
💡 Memory Tip:
Think of asynchronous like ordering food at a restaurant:

You order (start task) → waiter goes to kitchen (background work).

You keep chatting (other code runs).

Food comes later (async result).


1️⃣ Async/Await Basics
Async function → Always returns a Promise.

Await → Pauses execution until the promise is resolved or rejected (only works inside async functions).
syntax:async function myFunc() {
  let result = await somePromise();
  console.log(result);
}
💡 Memory Tricks
Callback → "I’ll call you later" 📞

Promise → "I promise I’ll give you a result later" 📜

.then() = when resolved

.catch() = when rejected

.finally() = always runs

Async/Await → Write async code as if it’s sync.

// Callback
function cbExample(cb) { cb("Done"); }

// Promise
new Promise((res, rej) => { res("Done"); })
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Async/Await
async function test() {
  let data = await Promise.resolve("Done");
  console.log(data);
}
2️⃣ Fetch API
Built-in browser API to make HTTP requests.

Returns a Promise.

Basic Syntax:
1️⃣ API Meaning
API = Application Programming Interface

It’s like a messenger between two applications.

It lets different software talk to each other and exchange data or functionality.

💡 Simple Analogy:
Think of a restaurant waiter:

You (client) → place an order (request)

Waiter (API) → takes your request to the kitchen (server)

Kitchen → prepares food (processes data)

Waiter → brings food back to you (response)
💡 Memory Trick:

API is like a remote control — you press buttons (requests) to get things done on the TV (server) without touching the internal circuits.
2️⃣ In Web Development
When we talk about APIs in JavaScript:

Usually means a Web API (over HTTP/HTTPS).

You send a request to a server → server sends a response.

Data is often in JSON format.