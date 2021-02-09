function display(){
    //clear the field
    document.getElementById("pets").innerHTML="";
    //travel the pet's array
    for(var i=0;i<salon.pets[i].length;i++){
    //create a tmp
        var tmp=`<div class="pet">
        <h3>${salon.pets[i].name}</h3>
        <p> ${salon.pets[i].age}</p>
        <p> ${salon.pets[i].breed}</p>
        <p> ${salon.pets[i].gender}</p>
        <p> ${salon.pets[i].owner}</p>
        <p> ${salon.pets[i].phone}</p>
        </div>`
    //concatenate all the info and display on html
        document.getElementById("pets").innerHTML+=tmp;
    }
}

//use the function
display();