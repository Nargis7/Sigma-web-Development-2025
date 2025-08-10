console.log("I m a loops");

//  for loop
// Used when you know how many times to repeat.
for(let i = 0; i<5 ; i++){
  console.log(i);
}
/* 2. while loop
Repeats as long as a condition is true*/
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

/* 3. do...while loop
Executes at least once, then repeats while the condition is true.*/
let j = 0;
do {
  console.log(i);
  j++;
} while(j < 5);

// 4. for...of loop
// Loops over iterable objects (like arrays).
let arr = [1, 2, 3];
for(let value of arr) {
  console.log(value);
}

// 5. for...in loop
// Loops over object properties.
let obj = {a: 1, b: 2};
for(let key in obj) {
  console.log(key, obj[key]);
}