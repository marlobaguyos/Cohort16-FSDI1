var products=["Mac M1", "Magic Keyboard", "Magic Mouse", "Backpack"];
var prices = [1500,150,100,100];

//travel the array
for (var i=0;i<products.length;i++){
    console.log(`${products[i]} ---- ${prices[i]}`);
}

//display the total of my cart
var total = 0;
for (var j=0;j<prices.length;j++){
    total = prices[j] + total;
}
console.log(`${total}`);