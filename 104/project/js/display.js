function display(){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;

    //clear the field
    document.getElementById("pets").innerHTML="";
    //travel the pet's array
    for(var i=0;i<salon.pets.length;i++){
        //assign a price for each service(TIP: you have to use if)
        //nails -> , shower -> 20, hair -> 15, full ->25
        if(salon.pets[i].service==="nails"){
            salon.pets[i].price=15;
        }else if(salon.pets[i].service==="shower"){
            salon.pets[i].price=20;
        }else if(salon.pets[i].service==="hair"){
            salon.pets[i].price=15;
        }else if(salon.pets[i].service==="full"){
            salon.pets[i].price=25;
        }
        //create a tmp
            var tmp=`<div class="pet"> 
            <h3>${salon.pets[i].name}</h3>
            <p>${salon.pets[i].age}</p>
            <p>${salon.pets[i].breed}</p>
            <p>${salon.pets[i].gender}</p>
            <p>${salon.pets[i].service}</p>
            <p>${salon.pets[i].owner}</p>
            <p>${salon.pets[i].phone}</p>
            <p>$${salon.pets[i].price}</p>
            </div>`
        //concatenate all the info
    document.getElementById("pets").innerHTML+=tmp;
    }
    
}
//use the function
display();
