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
        {name:"Scooby", age:50, breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"Scrapy", age:40, breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"Speedy", age:60, breed:"Mixed",gender:"Male",owner:"Bugs",phone:"444-444-4444"},
        {name:"Pugpug", age:60, breed:"pug",gender:"Female",owner:"Marlo",phone:"111-111-1111"},
        {name:"Bababo", age:60, breed:"cat",gender:"Male",owner:"Phuong",phone:"222-222-2222"},
    ]
}

document.getElementById("footer-text").innerHTML=`
        <p>${salon.name}</p>
        <p>${salon.address.street}, ${salon.address.number}</p>
        <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;

for(var i=0;i<5;i++){
    console.log(salon.pets[i])
}