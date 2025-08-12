// Array method
// 1. push()
// Adds one or more elements to the end of an array.
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]
console.log(arr);


// 2. pop()
// Removes the last element from an array and returns it.
let arr1 = [1, 2, 3];
let last = arr1.pop(); // last is 3, arr1 is [1, 2]
//
// 3. shift()
// Removes the first element from an array and returns it.
let arr2 = [1, 2, 3];
let first = arr2.shift(); // first is 1, arr2 is [2, 3]
//
// 4. unshift()
// Adds one or more elements to the beginning of an array.
let arr3 = [1, 2, 3];
arr3.unshift(0); // arr3 is now [0, 1, 2, 3]
console.log(arr3);

// 5. concat()
// Combines two or more arrays
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let combined = arr4.concat(arr5); // combined is [1, 2, 3, 4, 5, 6]
console.log(combined);

// 6. join()
// Joins all elements into a string.
let arr6 = [1, 2, 3];
let joined = arr6.join(", "); // joined is "1, 2, 3"
console.log(joined);
// 
// 7. slice()
// Returns a shallow copy of a portion of an array.
let arr7 = [1, 2, 3, 4, 5];
let sliced = arr7.slice(1, 4); // sliced is [2, 3, 4]
console.log(sliced);

// 8. splice()
// Adds/removes elements from an array.
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1); // removes 1 element at index 2
console.log(arr8);

// 9. indexOf()
// Returns the first index of a value, or -1 if not found.
let arr9 = [1, 2, 3, 4, 5];
let indexx = arr9.indexOf(3); // index is 2
console.log(indexx);

// 10. includes()
// Checks if an array contains a value.
let arr10 = [1, 2, 3, 4, 5];
let hasValue = arr10.includes(3); // hasValue is true
console.log(hasValue);

// 11. forEach()
// Executes a function for each array element.
let arr11 = [1, 2, 3];
arr11.forEach((element) => {
  console.log(element);
});
let arr12 = [1, 2, 3];
arr12.forEach(el => console.log(el)); // prints 1 2 3

// 12. map()
// Creates a new array by applying a function to each element
let arr13 = [1, 2, 3];
let doubled = arr13.map((el) => el * 2); // doubled is [2, 4, 6]
console.log(doubled);
// 13. filter()
// Creates a new array with elements that pass a test.
let arr14 = [1, 2, 3, 4, 5];
let filtered = arr14.filter((el) => el > 2); // filtered is [3, 4, 5]
console.log(filtered);

// 14. reduce()
// Reduces the array to a single value.
let arr15 = [1, 2, 3, 4, 5];
let sum = arr15.reduce((accumulator, current) => accumulator + current, 0); // sum is 15
console.log(sum);
let arr16 = [1, 2, 3, 4];
let sum16 = arr16.reduce((acc, el) => acc + el, 0); // 10
console.log(sum16);

// 15. find()
// Returns the first element that satisfies a condition.
let arr17 = [1, 2, 3, 4, 5];
let found = arr17.find((el) => el > 2); // found is 3
console.log(found);


// 16. findIndex()
// Returns the index of the first element that satisfies a condition.
let arr18 = [1, 2, 3, 4, 5];
let index = arr18.findIndex((el) => el > 2); // index is 2
console.log(index);


// 17. sort()
// Sorts the elements of an array.
let arr19 = [5, 3, 1, 4, 2];
arr19.sort(); // arr19 is now [1, 2, 3, 4, 5]
console.log(arr19);

// 18. reverse()
// Reverses the order of the elements.
let arr20 = [1, 2, 3, 4, 5];
arr20.reverse(); // arr20 is now [5, 4, 3, 2, 1]
console.log(arr20);