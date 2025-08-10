console.log("Hello This is function");

/*In JavaScript, a function is a reusable block of code that performs a specific task. Functions help organize code and avoid repetition. */

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5


const multiply = (a, b) => a * b;

console.log(multiply(2, 4)); // Output: 8


const functionName = (parameters) => {
  // function body
  return value;
};


const addd = (a, b) => a + b;
console.log(addd(2, 3)); // Output: 5