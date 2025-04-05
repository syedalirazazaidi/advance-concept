// this is ancapsulate object bundle of properties and methods and it is essential way to group related data and functionality together
// it is essential way to group related data and functionality together
// An object is a collection of properties, where each property is defined as a key-value pair.
// An object literal is a comma-separated list of name-value pairs wrapped in curly braces.
// object literals are a way to create objects in JavaScript using curly braces {}. They can contain properties and methods.
// Example of an object literal
let programmingLanguages = {
  name: "JavaScript",
  type: "Scripting Language",
  callFunction: function () {
    console.log(`This is a ${this.type} called ${this.name}`);
  },
  drinkCoffee: function () {
    console.log("Drinking coffee...");
  },
};
programmingLanguages.callFunction(); // This is a Scripting Language called JavaScript
programmingLanguages.drinkCoffee(); // Drinking coffee...

let groceryListItems = {
  item1: "Apples",
  item2: "Bananas",
  item3: "Oranges",
  item4: "Grapes",
  displayItems: function () {
    console.log(`Grocery List: ${this.item1}, ${this.item2}`);
  },
};
groceryListItems.displayItems(); // Grocery List: Apples, Bananas
groceryListItems.item1 = "Mangoes"; // Updating item1
