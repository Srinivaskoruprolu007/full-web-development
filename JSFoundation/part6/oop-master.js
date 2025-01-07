// Constructor Function Example: Person
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let srinivas = new Person("Srinivas", 24);
  
  // Adding a method to Person's prototype
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  console.log("Constructor Function Example:");
  console.log(srinivas.greet()); // Output: Hello, my name is Srinivas and I am 24 years old.
  
  // Class extending Person (Inheritance)
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age); // Calling the parent constructor
      this.jobTitle = jobTitle;
    }
  
    // Overriding the greet method (Polymorphism)
    greet() {
      return `${super.greet()} I work as a ${this.jobTitle}.`;
    }
  
    // Static method (Class-level method)
    static companyInfo() {
      return "We are a global company.";
    }
  
    // Getter and Setter for jobTitle (Abstraction)
    get job() {
      return this.jobTitle;
    }
  
    set job(newJobTitle) {
      this.jobTitle = newJobTitle;
    }
  }
  
  console.log("\nClass with Inheritance and Polymorphism:");
  const employee1 = new Employee("John", 25, "Software Developer");
  console.log(employee1.greet()); // Output: Hello, my name is John and I am 25 years old. I work as a Software Developer.
  
  // Using static method
  console.log("Static Method Output:", Employee.companyInfo()); // Output: We are a global company.
  
  // Using getter and setter
  employee1.job = "Senior Developer"; // Set job title
  console.log("Updated Job Title:", employee1.greet()); // Updated Output: Hello, my name is John and I am 25 years old. I work as a Senior Developer.
  
  // Another Example: Vehicle
  console.log("\nVehicle and Inheritance Example:");
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      return `${this.model} is a car from ${this.make}`;
    }
  }
  
  // Inheritance (Car extends Vehicle)
  class Car extends Vehicle {
    drive() {
      return `${this.make}: This is an inheritance example.`;
    }
  }
  
  let newCar = new Car("Tata", "Punch");
  console.log("Drive Method:", newCar.drive()); // Output: Tata: This is an inheritance example.
  
  // Encapsulation
  console.log("\nEncapsulation Example:");
  class BankAccount {
    #balance = 0; // Private field
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
      return this.#balance;
    }
  
    getBalance() {
      return `$${this.#balance}`;
    }
  }
  
  let account = new BankAccount();
  account.deposit(200);
  console.log("Balance after deposit:", account.getBalance()); // Output: $200
  
  // Polymorphism with method overriding
  console.log("\nPolymorphism Example:");
  class Animal {
    speak() {
      return "Animal makes a sound.";
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Dog barks.";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Cat meows.";
    }
  }
  
  let animals = [new Animal(), new Dog(), new Cat()];
  animals.forEach((animal, index) =>
    console.log(`Animal ${index + 1} speaks:`, animal.speak())
  );
  // Output:
  // Animal 1 speaks: Animal makes a sound.
  // Animal 2 speaks: Dog barks.
  // Animal 3 speaks: Cat meows.
  
  // Abstraction with abstract-like base class
  console.log("\nAbstraction Example:");
  class Shape {
    constructor(name) {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.name = name;
    }
  
    area() {
      throw new Error("Area method must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  let circle = new Circle(5);
  console.log("Circle Area:", circle.area()); // Output: The area of the circle is 78.53981633974483
  
  let rectangle = new Rectangle(4, 6);
  console.log("Rectangle Area:", rectangle.area()); // Output: The area of the rectangle is 24
  
  // Singleton Pattern
  console.log("\nSingleton Pattern Example:");
  class Singleton {
    static instance;
  
    constructor(name) {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.name = name;
      Singleton.instance = this;
    }
  }
  
  let singleton1 = new Singleton("First Instance");
  let singleton2 = new Singleton("Second Instance");
  console.log("Are both instances equal?", singleton1 === singleton2); // Output: true
  console.log("Singleton Instance Name 1:", singleton1.name); // Output: First Instance
  console.log("Singleton Instance Name 2:", singleton2.name); // Output: First Instance
  