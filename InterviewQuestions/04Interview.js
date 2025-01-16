/* console.log(1+"1"); // "11"
console.log(1-"1") //0
console.log("1"-1); // error
 */
// 'use strict'
/* function test(){
    num = 10
    console.log(num)
    
}
test()
console.log(num);


 */
/* 'use strict'
function test(a,a){
    console.log(a);  
}
test(2,6) */

/* console.log({}=={}); // true
console.log({}==={}); // true */

/* function test(){
    console.log(test.abc);   
}
test()
test.abc=400
test() */
/* let obj={}
let obj1=obj
console.log(obj==obj1);
console.log(obj===obj1); */

/* const arr = [1, 2, 4, 5, 6]
 const greater = arr.filter(num=>num>4)
 console.log(greater);
 */
/* let a = 0o10 // if we star with 0 then it stores as octal
console.log(a);
 let b = 0x11
 console.log(b);
  */
/* const func = () => {};
function greet(msg) {
  console.log(msg);
}
function test(callback) {
  callback("Hello");
}

test(greet) */

/* setTimeout((a, b)=>{
    console.log(a+b);
    
},2000, 3, 4)

// 
const timeId = setInterval((a,b)=>{
    console.log(a+b);
    
},2000,4,6)

setTimeout(()=>{
    clearInterval(timeId)
}, 10000)
 */
/* onst a={
    name:'tharun',
}
const b={
    ...a
}
console.log(b.name);

const arr=[1,2,3,4,5]
const greater = arr.filter(num => num > 2).map(num => num * 2)
console.log(greater);
 */
/* const fruits=["apple","grape","guava","pineapple"]
const gfruits = fruits.filter(fruit=>fruit.startsWith('g'))
console.log(gfruits);
const startWithG = fruits.find(fruit => fruit.startsWith('g'))
console.log(startWithG);
 */

// let a = 10
// let b = 20;
// //
// [a,b] = [b,a]
// console.log(a, b); // 20 10

/* const arr1 = [1, 2]
const arr2 = [3, 5]
const merged = [...arr1, ...arr2]
console.log(merged);
 function ones(a){
    const [c,...d]=a
    return d
 }
const arr4 = [1,2,3,4,5,6]
const arr3 = ones(arr4)
console.log(arr3); */

const data = [
  { id: 1, name: "Alice", scores: [85, 90, 78] },
  { id: 2, name: "Bob", scores: [95, 88, 92] },
  { id: 3, name: "Charlie", scores: [70, 65, 80] },
];

// Extract the name and highest score of each person and store in an array of objects : {name: , maxScore: }
const Names = data.map(({ name, scores }) => {
  return {
    name,
    maxScore: Math.max(...scores),
  };
});
console.log(Names);


const persons = [
  { name: "Hemanth", age: 22 },
  { name: "Kishore", age: 62 },
  { name: "Mahesh", age: 21 },
];
const names = persons
  .map(({ name, age }) => age < 25 && name)
  .filter((val) => typeof val === "string");
console.log(names);
"bye....."