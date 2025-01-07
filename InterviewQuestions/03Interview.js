// guess the output
// 'use strict'
var a = 12;
console.log(a * 12);
console.log(a ** 12);

// guess the output
function test() {
  salary = 1000;
  console.log(salary);
}
test();
// console.log(salary);

// guess the output
function task(a, a) {
  console.log(a);
}
task(1, 2);

var x = 010;
console.log(x);

NaN = 100;
console.log(NaN);

Infinity = 200;
console.log(Infinity);

// Guess the output
function test1() {
  console.log(test1.abc);
}
test1();
test1.abc = 400;
test1.abc = 600;
test1();

// explain the output
console.log({} == {});
console.log({} === {});

// guess an explain the concept
let obj1 = {};
let obj2 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let c = {
  name: "Srinivas",
};
let b = {
  ...c,
};

b.name = "Tharun";
console.log(c.name);

