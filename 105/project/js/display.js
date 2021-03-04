function display(aPet) {
    //display the number of pets
    document.getElementById("numberPets").innerHTML = `Registered pets: ${salon.pets.length}`;
    //clear the field
    //document.getElementById("pets").innerHTML="";
    //travel the pet's array
    //for(var i=0;i<salon.pets.length;i++){
    // assign a price for each service (TIP: you have to use if)
    //nails -> 15 , shower -> 20, hair ->15, full ->25
    if (aPet.service === "nails") {
        aPet.price = 15;
    } else if (aPet.service === "shower") {
        aPet.price = 20;
    } else if (aPet.service === "hair") {
        aPet.price = 15;
    } else if (aPet.service === "full") {
        aPet.price = 25;
    }

    // create a tmp
    // var tmp = `<div id="${aPet.id}" class="pet">
    //     <h3>${aPet.name}</h3>
    //     <p> <strong>Age:</strong> ${aPet.age}</p>
    //     <p> <strong>Gender:</strong> ${aPet.gender}</p>
    //     <p> Breed: ${aPet.breed}</p>
    //     <p>Service: ${aPet.service}</p>
    //     <p>Owner: ${aPet.owner}</p>
    //     <p>Phone: ${aPet.phone}</p>
    //     <p>$${aPet.price}</p> 
    //     <button >Delete</button></div>`;

    var table = `
            <tr id="${aPet.id}">
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <td>${aPet.owner}</td>
                <td>${aPet.phone}</td>
                <td>$${aPet.price}</td>
                <td><button onclick="">Delete</button></td>
            </tr>
            `;
    // concatenate all the info and display on html
    // document.getElementById("pets").innerHTML += tmp;
    document.getElementById("pets").innerHTML += table;
    //}
    // document.getElementById("pets").appendChild(tmp);
    profitCalculation();
}