function display(){
    //clear the field

    //travel the pet's array
    for(var i=0;i<salon.pets.length;i++){
        //create a tmp
            var tmp=`<div> 
            <h3>${salon.pets[i].name}</h3>
            <p>${salon.pets[i].age}</p>
            <p>${salon.pets[i].breed}</p>
            <p>${salon.pets[i].gender}</p>
            <p>${salon.pets[i].service}</p>
            <p>${salon.pets[i].owner}</p>
            <p>${salon.pets[i].phone}</p>
            </div>`
        //concatenate all the info
    document.getElementById("pets").innerHTML=tmp;
    }
    
}
//use the function
display();
