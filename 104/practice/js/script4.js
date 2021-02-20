class Item {
    constructor(a, b){
        this.product=a;
        this.price=b;
    }
}
var item1=newItem("Mac M1",1500);
var item2=newItem("Magic Mouse",150);
var item3=newItem("Magic Keyboard",120);
var item4=newItem("Backpack",100);
var item5=newItem("Echo dot",150);

var total = 0;
for (var j=0;j<items.length;j++){
    total = items[j].price + total;
}
console.log(`The total is: ${total}`);
