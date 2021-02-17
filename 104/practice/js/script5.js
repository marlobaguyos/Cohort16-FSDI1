console.log("Script 5");
//object literal
var lionL={
    name:"Simba",
    foodType:"Carnivore",
    kingOfTheJungle:true
}

var monkeyL={
    name:"Rafiki",
    foodType:"Carnivore",
    kingOfTheJungle:false
}

//object constructor
class Animal{
    constructor(name,foodType,kingOfTheJungle){
        this.name=name;
        this.foodType=foodType;
        this.kingOfTheJungle=kingOfTheJungle;
    }
}

var lionC=new Animal("Simba", "Carnivore", true);
var monkeyC=new Animal("Rafiki", "Carnivorse", false);