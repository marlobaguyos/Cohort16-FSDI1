const client = {
    name:"Alex",
    type: "Premium",
    data:{
        address:{
            city:"Tijuana",
            country:"Mexico"
        },
        account:{
            number:"4589235678568978",
            paymentMethod:"VISA"
        }
    },songs:['Loosing my Religion',"Let's spend the night togehter","I want to break free"]
}

console.log(client);

//display Mexico
console.log(client.data.address.country);
//display number
console.log(client.data.account.number);
//display the name of a song
console.log(client.songs[1]);