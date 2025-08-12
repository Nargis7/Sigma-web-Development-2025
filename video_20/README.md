document.queryselector(".container").innerText
document.queryselector(".container").innerHTML
document.queryselector(".box").innerText

﻿
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName


// 1. By ID
document.getElementById("myId");

// 2. By Class
document.getElementsByClassName("myClass");

// 3. By Tag
document.getElementsByTagName("p");

// 4. Query Selector (single element)
document.querySelector(".myClass");  // class
document.querySelector("#myId");     // id

// 5. Query Selector All (multiple elements)
document.querySelectorAll("p");


// Change text
document.getElementById("myId").textContent = "New Text";

// Change HTML inside
document.getElementById("myId").innerHTML = "<b>Bold Text</b>";

// Change CSS
document.getElementById("myId").style.color = "red";

// Change attribute
document.getElementById("myImage").src = "newImage.jpg";

let newElement = document.createElement("p"); // Create element
newElement.textContent = "This is a new paragraph"; // Add text

document.body.appendChild(newElement); // Add to the page


REMOVE
let element = document.getElementById("myId");
element.remove(); // Remove directly


7. DOM Events
We can make the page respond to user actions.
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});

Common events:

click

mouseover / mouseout

keydown / keyup

submit

load
