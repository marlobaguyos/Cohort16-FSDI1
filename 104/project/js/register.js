const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
//     pets:[
//         {name:"Scooby", age:50, breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
//         {name:"Scrapy", age:40, breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
//         {name:"Speedy", age:60, breed:"Mixed",gender:"Male",owner:"Bugs",phone:"444-444-4444"},
//         {name:"Pugpug", age:60, breed:"pug",gender:"Female",owner:"Marlo",phone:"111-111-1111"},
//         {name:"Bababo", age:60, breed:"cat",gender:"Male",owner:"Phuong",phone:"222-222-2222"},
//     ]
}

document.getElementById("footer-text").innerHTML=`
        <p>${salon.name}</p>
        <p>${salon.address.street}, ${salon.address.number}</p>
        <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;

// for(var i=0;i<5;i++){
//     console.log(salon.pets[i])
// }

//create the pet class

class Pet{
    constructor(name,age,breed,gender,service,owner,phone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}

//create pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","Full Service", "Shaggy","555-555-5555");
var scrapy=new Pet("Scrapy",40,"Dane","Male","Shower","Shaggy","555-555-5555");
var speedy=new Pet("Speedy",40,"Mixed","Male","Nail cut","Bunny","333-333-3333");
console.log(scooby,scrapy,speedy);