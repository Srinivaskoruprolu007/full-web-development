let num1 = 2;
let num2 = 4;
if (num1 > num2) {
  console.log("Num1 is greater than the num2");
} else {
  console.log("num2 is greater than the num1");
}

// check if the variable is a number or not

let number = 23;
if (typeof number === "number") {
  console.log("yes it is a number");
} else {
  console.log("It's not a number");
}

// let's check a variable is boolean or not
let isTrue = true;
if (typeof isTrue === 'boolean'){
    console.log("Yes it is boolean");
    
}else{
    console.log("No, it's not a boolean");
    
}

// check if the array empty or not
let items = []
console.log(items.length);

if (items.length){
    console.log("Yes it is not empty");
}else{
    console.log("it's  empty ");
    
}