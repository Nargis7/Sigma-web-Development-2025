// arrays:collection of items
let heros = ["ironman" , "spiderman" , "batman" , "superman"]
console.log(heros); 
// output : ["ironman" , "spiderman" , "batman" , "superman"]
console.log(typeof heros); // output : object
console.log(heros.length); // output : 4
// console.log(heros[0]); // output : "ironman"
// console.log(heros[1]); // output : "spiderman"
// console.log(heros[2]); // output : "batman"
// console.log(heros[3]); // output : "superman"
heros[0] = "nargis"
for(let el of heros){
  // console.log(el); // output : "ironman" "spiderman" "batman" "superman"
}

let marks = [10,20,30,40];
let sum = 0;
for(let el of marks){
  sum += el;
}
// console.log(sum); // output : 100

let avg = sum / marks.length;
console.log(`Average of marks: ${avg}`); // output : 25

// arrays are mutable