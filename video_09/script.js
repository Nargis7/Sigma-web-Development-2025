console.log("hello world");


// variables: variables are container for storing data
var name = "John"; // string
var age = 30; // number
var isStudent = true; // boolean

// old way of declaring variables
var city = "New York"; // string
var zipCode = 10001; // number
var isEmployed = false; // boolean


const a1 = 10;
a1 = 20; // TypeError: Assignment to constant variable. not allowed because a1 is a constant


// modern way of declaring variables
let country = "USA"; // string
let population = 331002651; // number
let isDeveloped = true; // boolean


// var :function scoped
// let: modern and block scoped
// const : block scoped and can't be reassigned


let x = "Nargis";
let y = 22;
let z = true;
let a = null;
let b = BigInt(1234567890123456789012345678901234567890); // BigInt
let c = Symbol("id"); // Symbol
let d = undefined; // Undefined


console.log(x,y,z,a,b,c,d); // Output: Nargis 22 true null 1234567890123456789012345678901234567890 Symbol(id) undefined

console.log(typeof x, typeof y, typeof z, typeof a, typeof b, typeof c, typeof d); // Output: string number boolean object bigint symbol undefined

// why type of null is object:
console.log(typeof null); // Output: object
// typeof null returns "object" due to a legacy bug in JavaScript's design.


// object
let e = { id: 1,
   name: "John" ,
   is_handsome: "true"
  }; // Object


  console.log(e); // Output: { id: 1, name: "John" }
  e.salary = "1000crores"
  console.log(e);
