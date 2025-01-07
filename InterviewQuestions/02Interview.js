// 1. Write a function that takes an array of numbers and returns a new array with each number doubled.
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

// 2. Create an object representing a person with properties for name, age, and occupation. Write a function to display a greeting message using this object.
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};

function greetPerson(person) {
  return `Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`;
}

// 3. Write a function that takes a callback and calls it after 2 seconds.
function delayedCallback(callback) {
  setTimeout(callback, 2000);
}

// 4. Create an async function that fetches data from an API and logs the result.
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 5. Write a function using ES6 syntax that takes two parameters and returns their sum.
const add = (a, b) => a + b;

// 6. Create a class representing a Car with properties for make, model, and year. Include a method to display the car's details.
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
  }
}

// 7. Write a function that uses the spread operator to merge two arrays.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// 8. Create a function that uses destructuring to extract and log the name and age from a person object.
function logPersonDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
  // 9. Explain hoisting in JavaScript with an example.
  function hoistingExample() {
    // Add your code here
  }
}

// 10. Write a function that demonstrates currying.
function curryFunction(a) {
  // Add your code here
}

// 11. Create a function that demonstrates closures.
function closureExample() {
  // Add your code here
}
// 9. Explain hoisting in JavaScript with an example.
function hoistingExample() {
    console.log(hoistedVar); // undefined
    var hoistedVar = "This variable is hoisted";
    console.log(hoistedVar); // "This variable is hoisted"
}

// 10. Write a function that demonstrates currying.
function curryFunction(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// 11. Create a function that demonstrates closures.
function closureExample() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// 12. Guess the output of the following async function examples.
async function asyncExample1() {
    console.log("Start");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("End");
}

async function asyncExample2() {
    console.log("Start");
    const result = await Promise.resolve("Resolved");
    console.log(result);
    console.log("End");
}

async function asyncExample3() {
    console.log("Start");
    await Promise.reject("Error").catch((error) => console.log(error));
    console.log("End");
}