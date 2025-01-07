// example 1

// normal function grabs the present dom element
// arrow function grabs the window context
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);

    let pargraph = document.getElementById("myParagraph");
    pargraph.textContent = "This paragraph is changed";
  });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType").textContent = "Espresso";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let list = document.getElementById("shoppingList");
  let newListItem = document.createElement("li");
  newListItem.textContent = "Tooth Paste";
  list.appendChild(newListItem);
});

// example 5
document.getElementById("deleteItem").addEventListener("click", function () {
  let list = document.getElementById("list");
  list.lastElementChild.remove();
});
