let btn = document.getElementById("myBtn");
btn.addEventListener("dblclick",()=>{
//   alert("Button clicked!");
// document.querySelector(".box").style.backgroundColor = "aquamarine";
document.querySelector(".box").innerHTML = "<b>Button was clicked</b> enjoy you clicked"
});

/* document.getElementById("myBtn")
  .addEventListener("click", function() {
    alert("Button clicked!");
  });
*/

btn.addEventListener("contextmenu", ()=>{
  alert("Dont hack us by right click pls!");
})
document.addEventListener("keydown", (e)=>{
  console.log(e);
})