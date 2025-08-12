// write a program to calculate  factorial of a number using reduce and for loop

// Using for loop
function factorialForLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Using reduce
function factorialReduce(n) {
// Defines a function named factorialReduce that takes a number n as input.

  return Array.from({ length: n }, (_, i) => i + 1)
  // Creates an array of numbers from 1 to n.
  // Array.from({ length: n }, (_, i) => i + 1) generates [1, 2, ..., n].

    .reduce((acc, curr) => acc * curr, 1);
    // Uses the reduce method to multiply all elements together.
    // acc is the accumulator (starts at 1), curr is the current value.
    // This calculates 1 * 2 * ... * n (the factorial).
}

console.log(factorialForLoop(5)); // 120
console.log(factorialReduce(5));   // 120

let a = 6;
function factorial(number){
  let arr = Array.from(Array(number+1).keys())
  console.log(arr.slice(1,));
  let c = arr.slice(1,).reduce((a,b)=>{
    return a*b;
  })
  console.log(c);
}

factorial(a);