const Person = {
  name: "Srinivas",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

Person.greet()

const greetPerson = Person.greet
greetPerson() // context is lost

const boundGreet = Person.greet.bind({name:'Jane'})
boundGreet()

// bind, call and apply

const person = {
    name: "Srinivas",
};

function greet(greeting) {
    return `${greeting}, ${this.name}`;
}

const boundGreet1 = greet.bind(person);
console.log(boundGreet("Hello")); // Output: "Hello, Srinivas"
