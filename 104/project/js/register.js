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
    pets:[
        {name:"Scooby",age:50,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"Scrapy",age:40,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"Speedy",age:60,breed:"Mixed",gender:"Male",owner:"Bugs",phone:"444-444-4444"},
        {name:"Stunky",age:22,breed:"pug",gender:"Female",owner:"Marlo",phone:"333-333-3333"},
        {name:"Spunky",age:17,breed:"corky",gender:"FeMale",owner:"Erica",phone:"222-222-2222"}
    ]
}
document.getElementById("footer-text").innerHTML=`
    <p>${salon.name}</p>
    <p>${salon.address.street}, ${salon.address.number}</p>
    <p>It's open from ${salon.hours.open} to ${salon.hours.close}</p>
`

for(var i=0;i<5;i++){
    var numPets = `
        <p>Number of Pet registered: ${salon.pets.length}</p>
        `
    document.getElementById("total").innerHTML=numPets;
    var petName=`
        <p>${salon.pets[i].name}</p>
        `
    document.getElementById("pets").innerHTML+=petName
}
