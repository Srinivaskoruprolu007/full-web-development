// Task 1: Use the `filter` method to create a new array that contains only the even numbers from the following array.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Solve below this comment:
let evenArray = numbers.filter((num) => num % 2 === 0);

// Task 2: Use the `map` method to create a new array where each number is doubled.
let numbers2 = [1, 2, 3, 4, 5];
// Solve below this comment:
let doubledNumbers = numbers2.map((num) => num * 2);

// Task 3: Use the `reduce` method to calculate the sum of all numbers in the following array.
let numbers3 = [1, 2, 3, 4, 5];
// Solve below this comment:
let total = numbers3.reduce((sum, num) => sum + num, 0);

// Task 4: Use the `filter` method to create a new array containing only the strings that have a length greater than 4 from the following array.
let words1 = ["apple", "banana", "kiwi", "cherry", "pear"];
// Solve below this comment:
let largeWords = words1.filter((word) => word.length > 4);

// Task 5: Use the `map` method to create a new array where each string is capitalized from the following array.
let words2 = ["hello", "world", "javascript", "is", "awesome"];
// Solve below this comment:
let capitalWords = words2.map((word) => word.toUpperCase());

// Task 6: Use the `reduce` method to find the product of all numbers in the following array.
let numbers4 = [1, 2, 3, 4, 5];
// Solve below this comment:
let totalProduct = numbers4.reduce((product, num) => product * num, 1);

// Task 7: Use the `map` method to create a new array where each number is squared from the following array.
let numbers5 = [1, 2, 3, 4, 5];
// Solve below this comment:
let squareNumbers = numbers5.map((num) => num * num);

// Task 8: Use the `filter` method to create a new array with all the numbers greater than 5 from the following array.
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Solve below this comment:
let greaterThan5 = numbers6.filter((num) => num > 5);

// Task 9: Use the `reduce` method to find the average of all numbers in the following array.
let numbers7 = [10, 20, 30, 40, 50];
// Solve below this comment:
let avg = numbers7.reduce((sum, num) => sum + num, 0) / numbers7.length;

// Task 10: Use the `map` and `filter` methods together to first filter out all numbers greater than 5 from the following array and then double the remaining numbers.
let numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Solve below this comment:
let doubletheGreater = numbers8.filter((num) => num <= 5).map((num) => num * 2);
