console.log("Hello asynchronous programming");

const greet = () => {
  console.log("hello everyone i'll execute later..");
};

setTimeout(() => {
  greet();
}, 4000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
