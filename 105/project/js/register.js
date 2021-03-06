const salon = {
    name: "The Fashion Pet",
    address: {
        street: "Av. University",
        number: "192-k"
    },
    hours: {
        open: "8:00 am",
        close: "5:00 pm"
    },
    pets: []
}

function displayInfo() {
    document.getElementById("footer-text").innerHTML = `
    <div class="text-white">
        <div class="card-header"><h4>${salon.name}</h4></div>
        <div class="card-body">
            <h6 class="card-title">Location: ${salon.address.street}, ${salon.address.number}</h6>
            <p class="card-text">We are open from ${salon.hours.open} to ${salon.hours.close} 7 days a week</p>
        </div>
    </div>`;
}

// function displayInfo(){
//     document.getElementById("footer-text").innerHTML=`
//     <ul class="navbar-nav"> ${salon.name} </ul>
//     <li> ${salon.address.street}, ${salon.address.number} </li>
//     <li> It opens from ${salon.hours.open} to ${salon.hours.close}</li>
//     `;
// }
var c = 0;
// create the Pet class
class Pet {
    constructor(name, age, breed, gender, service, owner, phone) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.price = 0;
        this.id = c++;
    }
}
// create pets using the constructor
var scooby = new Pet("Scooby", 50, "Dane", "Male", "full", "Shaggy", "555-555-555");
var scrapy = new Pet("Scrapy", 40, "Dane", "Male", "shower", "Shaggy", "555-555-555");
var speedy = new Pet("Speedy", 80, "Mixed", "Male", "nails", "Bunny", "333-333-333");



var txtName = document.getElementById("petNameTxt");
var txtAge = document.getElementById("petAgeTxt");
var txtBreed = document.getElementById("petBreedTxt");
var txtGender = document.getElementById("petGenderTxt");
var txtService = document.getElementById("petServiceTxt");
var txtOwner = document.getElementById("ownerNameTxt");
var txtPhone = document.getElementById("ownerPhoneTxt");

function clear() {
    txtName.value = "";
    txtAge.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtService.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
}
// create the function register
function register() {
    //create a generic object
    var thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
    console.log(thePet);
    // push the pet into the array
    salon.pets.push(thePet);
    // display function
    display(thePet);
    clear();
}

function profitCalculation() {
    //create a variable sum and initializate the variable
    var sum = 0;
    // travel the salon.pets[] (for)
    for (var i = 0; i < salon.pets.length; i++) {
        //sum all the prices
        sum = sum + salon.pets[i].price;
    }

    // display the result on the html
    document.getElementById("profits").innerHTML = `Profits: $${sum}`;
}

function deletePet(petId) {
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
        var pet = salon.pets[i];
        if(pet.id == petId){
            //remove from html
            $('#'+petId).remove();
            //remove from the array
            salon.pets.splice(i,1);
        }
    }
    profitCalculation();
    document.getElementById("numberPets").innerHTML = `Registered pets: ${salon.pets.length}`;
}

function search(){
    var string=$('#petSearch').val();
    var searchString=string.toLowerCase();
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase().includes(searchString)||selected.service.toLowerCase().includes(searchString)){
            $('#'+selected.id).show();//addClass('selected');
        }else{
            $('#'+selected.id).hide();//removeClass('selected');
            // $('#pets').html("<h2>It doesn't exist</h2>")
        }
    }
}

function init() {
    //default
    console.log("Initialization");
    // push the pets into the array
    //salon.pets=[scooby,scrapy,speedy];
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(speedy);
    display(scooby);
    display(scrapy);
    display(speedy);
    console.log(salon.pets);
    displayInfo();

    //hook events
    $('#btn-register').on('click',register);
    $('#btn-search').on('click',search);
    $('#petSearch').keypress(function(e){
        if(e.key==="Enter"){
            search();
        }
    });
}
window.onload = init;
