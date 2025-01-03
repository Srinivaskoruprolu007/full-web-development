/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
    Store all teas before `"chai"` in a new array named `selectedTeas`. 
 */

let teaArray = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let index = 0; index < teaArray.length; index++) {
  const element = teaArray[index];
  if (element !== "chai") {
    selectedTeas.push(element);
  } else break;
}
console.log(selectedTeas);

/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"] and skips `"Paris"`. 
Store the other cities in a new array named `visitedCities`. 
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let index = 0; index < cities.length; index++) {
  const city = cities[index];
  if (city === "Paris") {
    continue;
  }
  visitedCities.push(city);
}
console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1,2, 3, 4, 5]` and stop when the number `4` is found. Store the numbers before `4` in an array named `smallNumbers`
 */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const i of numbers) {
  if (i === 4) break;
  smallNumbers.push(i);
}
console.log(smallNumbers);

/*
 4. Use a `for-of` loop to iterate through the array `["Chai", "herbal tea", "black tea"]` and skip `"herbal tea"`
 Store the other teas in an array named `preferredTea`
 */

let teaTypes = ["Chai", "herbal tea", "black tea"];
let preferredTea = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTea.push(tea);
}
console.log(preferredTea);

/*
 5. Use a `for-in` loop to loop through an object containing city populations.
 Stop the loop when the population of `"Berlin"` is found and store all previous cities populations cities populations in a new object named `cityPopulations`
    
    let citiesPopulation = {
        "London" : 8900000,
        "New York": 845000,
        "Paris" : 230000,
        "Berlin" : 345000
    };
 */

let citiesPopulation = {
  London: 8900000,
  "New York": 8450000,
  Paris: 2300000,
  Berlin: 3450000,
};

let cityPopulations = {};
for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

/*
6. Use `for-in` loop to loop through an object containing city populations. Skip any city with a populations below 3 million and store the rest in a new object named `largeCities`

let worldCities = {
    "Sidney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000
}
 */

let worldCities = {
  Sidney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] >= 3000000) {
    largeCities[city] = worldCities[city];
  }
}
console.log(largeCities);

/*
7. Write a `foreach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
Stop the loop when `"chai"` is found and store all previous tea types in an array named `availableTeaTypes` 
 */

let teaType = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeaTypes = [];
teaType.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeaTypes.push(tea);
});
console.log(availableTeaTypes);

/*
8. Write a `forEach loop that iterates through the array `["Berlin", "Tokyo", "Sidney", "Paris"]`. 
Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.  
 */
let myFavCities = ["Berlin", "Tokyo", "Sidney", "Paris"];
let traveledCities = [];

myFavCities.forEach((city) => {
  if (city === "Sidney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]` skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledumbers` 
 */
let oddumbers = [2, 5, 7, 9];
let doubledumbers = [];
for (let index = 0; index < oddumbers.length; index++) {
  const number = oddumbers[index];
  if (number === 7) {
    continue;
  }
  doubledumbers.push(number * 2);
}
console.log(doubledumbers);

/*
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] `
and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named `shortTeas`. 
 */

let teaVarieties = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
let shortTeas = [];

for (const tea of teaVarieties) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);

