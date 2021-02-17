var products=["Mac M1", "Magic Keyboard", "Magic Mouse", "Backpack"];
var prices = [1500,150,100,100];
var item1={
    product:"Mac M1",
    price:1500
}
var item2={
    product:"Magis Keyboard",
    price: 150
}
var item3={
    product:"Magic Mouse",
    price:100
}
var item4={
    product:"Backpack",
    price:100
}
var item5={
    product:"Echo dot",
    price:150
}
var items=[item1,item2,item3,item4,item5]

//travel the array
for (var i=0;i<products.length;i++){
    console.log(`${products[i]} ---- ${prices[i]}`);
}

//display the total of my cart

//var total=preces[0] + prices[1] + prices[2] + prices[3] + prices [4]

var total = 0;
for (var j=0;j<prices.length;j++){
    total = prices[j] + total;
}
console.log(`The total is: ${total}`);