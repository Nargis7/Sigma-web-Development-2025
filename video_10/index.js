console.log("Hello i m a conditional tutorial");

let age = 17;

if(age>18){
  // console.log("you can drive");
}else{
  // console.log("you cannot drive");
}


let age1 = 3;
let age2 = 2;

console.log(age1 + age2);//5
console.log(age1 * age2);//6
console.log(age1 - age2);//1
console.log(age1 ** age2);//9
console.log(age1 % age2); //1

// && (Logical AND): Returns true if both operands are true.
// || (Logical OR): Returns true if at least one operand is true.
// ! (Logical NOT): Inverts the boolean value.

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false

// ternary operator
let age3 = 18;
let canDrive = (age > 18) ? "You can drive" : "You cannot drive";
console.log(canDrive);