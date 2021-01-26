//var let const
console.log("Variable script");
var client; // declaration

client = "John"; // assign the value

client = "Sarah";

var client = "Mike";
console.log(client);

// let

let song = "Looking my Religion";
song = "Let it be";
console.log(song);

//const (the same during all the program)

const taxes = 11;
console.log(taxes);

//Please create 4 variables for a student system
var name = "Class Assigment 1";
var description = "Create a program";
var points = 6.6;
var due = "01/25/2021";

// document.write("<h1>" + name + "</h1>" + "<p>" + description + "<p>" + points + "</p>" + due + "</p>");

document.write(`<h1> ${name} </h1>
<p class="bordered"> ${description} </p>
<p> ${points}</p>
<p> ${due}</p>`);
