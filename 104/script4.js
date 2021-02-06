// var products=["Mac M1", "Magic Keyboard", "Magic Mouse", "Backpack"];
// var prices = [1500,150,100,100];

class Item{
    constructor(a,b){
        this.product=a;
        this.price=b;
    }
}
var item1=new Item("Mac M1",1500)
var item1=new Item("Magic Mouse",150)
var item1=new Item("Magic Keyboard",120)
var item1=new Item("Backpack",100)
var item1=new Item("Echo dot",150)

// var item1={
//     product:"Mac M1",
//     price:1500
// }
// var item2={
//     product:"Magic Keyboard",
//     price:150
// }
// var item3={
//     product:"Magic Mouse",
//     price:100
// }
// var item4={
//     product:"Backpack",
//     price:100
// }
// var item5={
//     product:"Echo dot",
//     price:150
// }


var items=[item1,item2,item3,item4,item5];
//travel the array
// for (var i=0;i<4;i++){//i
//     console.log(`${products[i]} -- ${prices[i]}`);}r

for(var i=0;i<items.length;i++){//i
    console.log(`${items[i].product} -- ${items[i].price}`);
}


// console.log(`${item1.product} -- ${item1.price}`);
// console.log(`${item2.product} -- ${item2.price}`);
// console.log(`${item3.product} -- ${item3.price}`);
// console.log(`${item4.product} -- ${item4.price}`);
// console.log(`${item5.product} -- ${item5.price}`);


//display the total of my cart
// var total=prices[0]+prices[1]+prices[2]+prices[3];
// console.log(`The total is: ${total}`);

var total=0;
for(var j=0;j<items.length;j++){
    total=items[j].price+total;
}
console.log(`The total is: ${total}`);