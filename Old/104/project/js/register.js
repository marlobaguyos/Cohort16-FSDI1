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
    pets:[]
}

document.getElementById("footer-text").innerHTML=`
        <p>${salon.name}</p>
        <p>${salon.address.street}, ${salon.address.number}</p>
        <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;

// for(var i=0;i<3;i++){
//     console.log(salon.pets[i]);
// }

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

//push the pets into the array
//salon.pets=[scooby,scrapy,speedy];
salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(speedy);
console.log(salon.pets)

var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtService=document.getElementById("petServiceTxt");
var txtOwner=document.getElementById("OwnerNameTxt");
var txtPhone=document.getElementById("OwnerPhoneTxt");

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

//create the function register
function register(){
    //get the info from the inputs
            // console.log(txtName.value);
            // console.log(txtAge.value);
            // console.log(txtBreed.value);
            // console.log(txtGender.value);
            // console.log(txtService.value);
            // console.log(txtOwner.value);
            // console.log(txtPhone.value);
    //create a generic object
    var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);
    //push the pet into the array
    salon.pets.push(thePet);
    //display function
    display();
    clear();
}

