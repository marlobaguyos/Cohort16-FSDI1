//atributes
var links = document.getElementsByTagName('a');
console.log(links);
links[0].setAttribute('target', 'blank');
links[1].setAttribute('class', 'bordered');

//create html elements
var h1 = document.createElement('h1');
var text = document.createTextNode("Hello World");
h1.appendChild(text);
console.log(h1);
var main = document.getElementById("main");
main.appendChild(h1);

//hide an element
main.style.display = "none";