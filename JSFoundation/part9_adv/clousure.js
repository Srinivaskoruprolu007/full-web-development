// Function using Closure
function outer() {
    let counter = 0; // Private variable
    return function () {
        counter++;
        return counter;
    };
}

let increment = outer();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3
console.log(increment()); // Output: 4

// Normal Function Without Closure
let counter = 0; // Global variable

function incrementWithoutClosure() {
    counter++;
    return counter;
}

console.log(incrementWithoutClosure()); // Output: 1
console.log(incrementWithoutClosure()); // Output: 2
console.log(incrementWithoutClosure()); // Output: 3
console.log(incrementWithoutClosure()); // Output: 4

/*
Differences between Closure-Based Function and Normal Function:

1. **Scope of Variable**:
   - In the closure example, `counter` is encapsulated within the `outer` function's scope and is private to the returned inner function.
   - In the normal function, `counter` is a global variable, accessible and modifiable by any part of the program.

2. **Encapsulation**:
   - Closure provides better encapsulation, as `counter` is not exposed to the outside world.
   - The normal function lacks encapsulation, making `counter` vulnerable to accidental modification from other parts of the code.

3. **Reusability**:
   - With closures, you can create multiple independent counters by calling `outer()` again, as each call creates a new `counter` variable.
     Example:
     ```javascript
     let anotherIncrement = outer();
     console.log(anotherIncrement()); // Output: 1
     console.log(anotherIncrement()); // Output: 2
     ```
   - In the normal function, the `counter` variable is shared globally, so it's not possible to create independent counters.

4. **Risk of Side Effects**:
   - Closure-based functions reduce the risk of unintended side effects because the `counter` variable is not directly accessible.
   - Normal functions using global variables are more prone to side effects if the global `counter` is modified elsewhere in the program.

5. **Best Practices**:
   - Closures are preferred in scenarios where data privacy and encapsulation are important (e.g., when creating private state or maintaining isolated instances).
   - Normal functions with global variables should be avoided in modern programming due to potential conflicts and maintenance issues.
*/
