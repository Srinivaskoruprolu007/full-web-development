/* // Guess the output
console.log("1" + 1);

// Guess the output
console.log("1" - 1);

// Guess the output
console.log(1 - "1"); */

//  Guess the output
// setTimeout(function () {
//   console.log(10);
// }, 10);
// console.log(2);
// setTimeout(function () {
//   console.log(12);
// }, 10);
// setTimeout(function () {
//   console.log(11);
// }, 9);

/* a = 10
console.log(a)
let a; // var a */

/* console.log(a);
var a;
a = 10;
 */

/*
What is call back function  
A call back function is a funtion that is passed as an argument to another function and it executes after the completion of some operation or task.
 */

/*
What is difference between setTimeout() and setInterval() and clearInterval() 
setTimeout() -> Executes a function once after a specified delay (in milliseconds)
Use Case : Useful for scheduling a task that should run after a delay

 */
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

/*
setInterval() -> Executes a function repeatedly at a specified interval until it is stopped 
 */

// setInterval(() => {
//   console.log("Executes after every one second");
// }, 1000);

/*
clearInterval() -> stops the repeated execution of a function started by `setInterval()` 
 */

const intervalId = setInterval(() => {
  console.log("after every one second");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stoped after 5 seconds");
}, 5000);
/*
REDUX Interview Questions 
1. Is redux one-way data bindig or two way data-binding
ans: Redux is onw-way data binding here's why :
    1. unidirectional data flow
    - action : A user interaction or an event triggers an action
    -reducer : The action updates the central state in the store through a reducer function
    -view : The updates state is propagated to react components (views) via props or state selectors.

    This ensures predictability and makes it easy to track the flow of data

    2. State is immutable : 
    - The state in Redux is immutable, meaning it cannot be changed directly. Instead, a new state is created based on the dispatched action.
    - This immutability enforces a clear separation between the source of truth (the Redux store) and the consumer of that state (React components).

 */

/*
2. What is prop drilling
 Prop drilling is the process of passing data from parent component to a deeply nested child components through multiple intermediate components that don't neccesarily need the data themselves

 3. State vs props
 State : a compont's local data storage, represents dynamic data that can change over time, typically in response to user's actions or events
 modification only can be possible by setState 

 Props : Short for properties 
 Data passed from a parent component to child component
 Read-only and immutable within the receiving component

 4. Can i pass data from child to pass
 yes, you can pass data from a child component to a parent component in react but it requires a callback function
 Since data flow in react is unidirectional (from parent to child via props) 

 5. What is fragment
 A fragment is a component that allows you to group a mutliple elements without adding extra node to the DOM. It provides a way to return mutliple elements from component without introducing unneccessary wrapper element
 */
