let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
let ryzen = {};

// to access the prototype
console.log(`computer `, computer.__proto__);

console.log(`lenovo `, lenovo.__proto__);

let genericCar = {wheels : 4}

let tesla = {
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)

console.log(`tesla`, tesla);

// to aceess the prototype
console.log(`tesla`, Object.getPrototypeOf(tesla));

