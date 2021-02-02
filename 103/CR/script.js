// 1) get from the prompt the two values and display on the HMTL the values (use the document.write).

// 2) display the results of the four operations ( + - * /) with the two numbers.

// 3) write instructions on the index.html about how to use you calculator and the copyrights. Use a good CSS design to display it.

// ** extra challenge: Use functions for the operations.

function sum(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

var x=Number(prompt("Enter the First Number"));
var y=Number(prompt("Enter a Second Number"));

var plus = sum(x,y);
var minus = sub(x,y);
var times = mul(x,y);
var divide = div(x,y);

console.log(plus);
// document.write(`<p>Student's name: ${name}</p><p>Grade = ${assignGrade(score)}</p>`);


document.write(`<div>
<h2>Your Answers Dummy!</h2>
    <ul>
        <li>Addition: ${x} + ${y} = ${plus}</li>
        <li>Subtraction: ${x} - ${y} = ${minus} </li>
        <li>Multiplication: ${x} * ${y} = ${times}</li>
        <li>Division: ${x} / ${y} = ${divide}</li>
    </ul>
</div>`);