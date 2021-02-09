const saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    }
}
document.getElementById("footer-text").innerHTML=`
    <p>${saloon.name}</p>
    <p>${saloon.address.street}, ${saloon.address.number}</p>
    <p>It's open from ${saloon.hours.open} to ${saloon.hours.closes}</p>

`