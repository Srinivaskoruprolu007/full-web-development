/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
 Store the result in a variable named `teaOrder`
 */

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("geen tea");
console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"` call `confirmedOrder` from within `orderTea` and return the result.  
 */
function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}

let confimation = orderTea();
console.log(confimation);

/*
3. Write an arrow function named `caculatedTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by  mutltiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost` 
 */

const caculatedTotal = (price, quantity) => price * quantity;

let totalCost = caculatedTotal(499, 100);
console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function `makeTea` as a parameter and calls it with the argument `"earl grey"` return the result of calling `makeTea`
 */

function makeTea(teaType) {
  return `Making ${teaType}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let resulted = processTeaOrder(makeTea);
console.log(resulted);

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`
Store the returned function in a variable named `teaMaker` and call it with `"green tea"` 
 */

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));

/* 
Closures : A closure is created when an inner function "remembers" the variables from its outer function's scope, even after the outer function has finished executing. This powerful feature allows the inner function to access and manipulate the variables of its enclosing scope.
 */