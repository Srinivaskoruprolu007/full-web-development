console.log(this); // refers to window context

function showThis(){
    console.log(this);
}

showThis() // non-strict : global, else undefined

const obj = {
    name: "Srinivas",
    showThis: function () {
        console.log(this); // Refers to `obj`
    },
};
obj.showThis();

const obj1 = {
    name: "Srinivas",
    arrowFunc: () => console.log(this), // Refers to global `this` (not `obj`)
};
obj1.arrowFunc();
