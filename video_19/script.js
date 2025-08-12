console.log("Hello this is DOM");
// let box = document.getElementsByClassName("box");
// console.log(box);
// box[2].style.backgroundColor = "red";
// box[2].style.color = "yellow";

// document.getElementById("box2").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "aquamarine";
document.querySelectorAll(".box").forEach((el) => {
  el.style.backgroundColor = "blue";
  el.style.color = "white";
});

// document.getElementsByTagName("div")