//object literal

const person = {
    name:"Trae Davis",
    age:80
}

console.log(person.name);
console.log(person.age);

let product={
    code:"12345",
    description:"Smart TV",
    price:256.50
}

document.write(`<p>Product: ${product.description}</p>
                <p><b>Code: ${product.code}</b></p>
                <p>Price: ${product.price}</p>
                <p>Taxes: ${product.price * 0.16}</p>
                <p>Total: ${product.price * 1.16}</p>
                    `)