// Number

let balance = 120;

let anotherBalance = new Number(120);

// console.log(balance);

// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean
let isActive = true
let isReallyActive = new Boolean(true) // not recommended

// null and undefined
let firstName = null
let lastName;
console.log(firstName);
console.log(lastName);
// we can declare any variable with undfined
let middleName = undefined
console.log(middleName);

// string
let myString = "hello"
let myStringOne = 'hola'
let username = 'srinivas'

let oldGreet = myString + " "+"srinivas"
console.log(oldGreet);

let greetMessage = `Hello ${username} !`
console.log(greetMessage);

// symbol
let sm1 = Symbol()
let sm2 = Symbol()

// let check equality
console.log(sm1 == sm2); // false
// every time it creates a new symbol()

