/** let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​
cont.firstChild
#text
cont.lastChild
#text
cont.lastElementChild
<div class=​"box">​Box 5​</div>​
cont.lastElementChild.style.color = "red";
'red'
cont.lastElementChild.style.backgroundColor = "black";
'black'
cont.lastElementChild.style.color = "green";
'green'
cont.lastElementChild.style.border = "yellow";
'yellow'
cont.lastElementChild.style.border = "blue";
'blue'
cont.lastElementChild.style.borderBlockColor = "blue";
'blue'
document.body.firstElementChild
document.body.firstElementChild.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0] 
document.body.children */