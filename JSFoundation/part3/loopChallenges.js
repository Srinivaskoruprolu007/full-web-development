/* 
1. write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
 */

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`
*/

let countdown = [];
let num = 5;
while (num >= 1) {
  countdown.push(num);
  num--;
}
console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea tyoe until they enter `"stop"`.
Store each tea type in an array named teaCollection 
*/

/* let teaCollection = []
let tea;
do{
    tea = prompt(`Enter your favorite tea (type "stop") to finish`)
    if(tea !== "stop"){
        teaCollection.push(tea)
    }
}
while( tea !== 'stop');

console.log(teaCollection); */


/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total` 
 */

let total = 0
let j = 1
do{
    total += j
    j++;
}
while(j <= 3);

console.log(total);


/*
5. Write a `for` loop that mutliplies each element in the array `[2, 4, 6]` by 2 and stores the result in a new array named `multipliedNumbers`
 */

let myArray = [2, 4, 6]
let multipliedNumbers = []
for( let i = 0; i < myArray.length; i++){
    multipliedNumbers.push(myArray[i]*2)
}
console.log(multipliedNumbers);

/*
6. Write a `for` loop that lists all the cities in the array  `["Paris, "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`
 */

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    cityList.push(element)
}
console.log(cityList);
