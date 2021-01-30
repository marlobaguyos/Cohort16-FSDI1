// alert("Please Sign in to NinjaSchool.com");
// userName = prompt("Enter your name");
// userPass = prompt("Enter your password");

// if(userName.toLowerCase() == "samantha" && userPass == "587963"){
//     document.write("Welcome to Ninja School " + userName);
// }else{
//     document.write("Please enter the correct information");
// }


// Create a program where :

// - The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.

// -The system should calculate the final price adding taxes (like in Mexico 16% of taxes).

// *** use the Number()

// product = prompt("Enter your name");

document.write(`<h1> Tell us what product you want </h1>
<h2>Example </h2>
<p>Banana</p>
<p>Apple</p>
<p>Carrot</p>`);

product = prompt("Enter Product Name");
console.log("You have entered: " + product);
proQuantity = parseFloat(prompt("Enter Quantity"));
console.log("You have entered: " + proQuantity + " quantity");
proPrice = parseFloat(prompt("Enter price"));
console.log("You have entered: $" + proPrice);
subTotal = parseFloat(proPrice * proQuantity);
withtax = parseFloat(subTotal * 0.1);
console.log("Subtotal: " + subTotal);
console.log("Tax: " + withtax);
console.log("Total: " + (subTotal + withtax));

