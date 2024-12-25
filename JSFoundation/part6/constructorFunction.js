// normal function
function greet(name) {
  console.log("Hello everyone");
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

// constructor function with functions
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type} tea`;
  };
}

let lemon = new Tea("lemon");
console.log(lemon.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sounds`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword ");
  }
  this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");
