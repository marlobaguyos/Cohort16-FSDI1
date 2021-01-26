var name = "Class Assigment 1";
var description = "Create a program";
var points = 6.6;
var due = "01/25/2021";

var fisrtName = "Marlo";
var lastName = "Baguyos";
var email = "marlo.baguyos@awesome.com";
var phone = "1234567890"

let dogName = "Mike";
let catName = "Bob";
let lizardName = "Pedro";
let tigername = "tiger";

const studentID = 1010101;
const SSN = 4573829203;
const stateIDNumber = 234432;
const dogID = 33432;

var favColor = "blue";
var favFood = "cake";
var favCar = "Honda";
var favState = "Alaska";

document.write(`<h1> ${name} </h1>
<p class="bordered"> ${description} </p>
<p> ${points}</p>
<p> ${due}</p>
<p> ${fisrtName}</p>
<p> ${lastName}</p>
<p> ${email}</p>
<p> ${phone}</p>
<p> ${dogName}</p>
<p> ${catName}</p>
<p> ${lizardName}</p>
<p> ${tigername}</p>
<p> ${studentID}</p>
<p> ${SSN}</p>
<p> ${stateIDNumber}</p>
<p> ${dogID}</p>
<p> ${favColor}</p>
<p> ${favFood}</p>
<p> ${favCar}</p>
<p> ${favState}</p>`);

for(x=1;x<=100;x=x+2)
{
    for(y = x;y<x+2;y++)
    {
        document.write(y);
    }
    document.write("<br>");
    // document.write("Line "+ x + "</br>");
}

var myMoney = 5;
var yourMoney = 10;

if(myMoney >= yourMoney){
    document.write("You need a new Job");
}else{
    document.write("Awesome!");
}