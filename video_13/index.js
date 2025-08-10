/* 


string

A string in JavaScript is a sequence of characters used to represent text. Strings are enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...` for template literals). */


let str1 = "Hello, world!";
let str5 = 'JavaScript';
let str7 = `The sum is ${2 + 3}`; // Template literal

let message = "Hello";
console.log(message.length); // 5
console.log(message.toUpperCase());




let str = "Hello, JavaScript!";

// 1. length
console.log(str.length); // 18

// 2. toUpperCase()
console.log(str.toUpperCase()); // "HELLO, JAVASCRIPT!"

// 3. toLowerCase()
console.log(str.toLowerCase()); // "hello, javascript!"

// 4. includes()
console.log(str.includes("Java")); // true

// 5. indexOf()
console.log(str.indexOf("Java")); // 7

// 6. lastIndexOf()
console.log(str.lastIndexOf("a")); // 13

// 7. slice(start, end)
console.log(str.slice(7, 17)); // "JavaScript"

// 8. substring(start, end)
console.log(str.substring(7, 17)); // "JavaScript"

// 9. substr(start, length) [deprecated]
console.log(str.substr(7, 4)); // "Java"

// 10. replace(search, replacement)
console.log(str.replace("JavaScript", "World")); // "Hello, World!"

// 11. replaceAll(search, replacement)
let str2 = "apple, apple, apple";
console.log(str2.replaceAll("apple", "orange")); // "orange, orange, orange"

// 12. split(separator)
console.log(str.split(", ")); // ["Hello", "JavaScript!"]

// 13. trim()
let str3 = "   Hello!   ";
console.log(str3.trim()); // "Hello!"

// 14. startsWith()
console.log(str.startsWith("Hello")); // true

// 15. endsWith()
console.log(str.endsWith("!")); // true

// 16. charAt(index)
console.log(str.charAt(1)); // "e"

// 17. charCodeAt(index)
console.log(str.charCodeAt(1)); // 101

// 18. repeat(count)
console.log(str.repeat(2)); // "Hello, JavaScript!Hello, JavaScript!"

// 19. padStart(targetLength, padString)
console.log("5".padStart(3, "0")); // "005"

// 20. padEnd(targetLength, padString)
console.log("5".padEnd(3, "0")); // "500"

// 21. concat()
console.log(str.concat(" Let's learn!")); // "Hello, JavaScript! Let's learn!"

// 22. match(regex)
console.log(str.match(/Java/)); // ["Java"]

// 23. search(regex)
console.log(str.search(/Java/)); // 7

// 24. valueOf()
console.log(str.valueOf()); // "Hello, JavaScript!"

// 25. toString()
console.log(str.toString()); // "Hello, JavaScript!"