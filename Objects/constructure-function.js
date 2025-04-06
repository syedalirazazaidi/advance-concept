// This code defines a constructor function that creates an object with a name and properties.
// It also includes a method to call the function and log the properties of the object.
// The constructor function is used to create an instance of the object with specific properties.
// // Example of a constructor function

constructure = function (name, properties) {
  this.name = name;
  this.properties = properties;
  this.callFunction = function () {
    console.log(`This is a ${this.name} with properties: ${this.properties}`);
  };
  //  private method
  let drinkCoffeePrivate = function () {
    console.log("Drinking coffee...");
  };
  // public method
  this.drinkCoffee = function () {
    drinkCoffee();
  };
};
// Example usage:
let programmingLanguage = new constructure("JavaScript", {
  type: "Scripting Language",
  version: "ES6",
});
programmingLanguage.callFunction(); // This is a JavaScript with properties: [object Object]
programmingLanguage.properties.type = "Programming Language"; // Updating property
programmingLanguage.callFunction(); // This is a JavaScript with properties: [object Object]
programmingLanguage.drinkCoffeePrivate(); // Drinking coffee...


function CreateGroceryList(item1, item2, item3, item4) {
  this.item1 = item1;
  this.item2 = item2;
  this.item3 = item3;
  this.item4 = item4;
  this.displayItems = function () {
    console.log(`Grocery List: ${this.item1}, ${this.item2}`);
  };
  // private method
  // private method
  let drinkCoffeePrivate = function () {
    console.log("Drinking coffee...");
  };
  drinkCoffeePrivate()
}

const groceryList = new CreateGroceryList(
  "Apples",
  "Bananas",
  "Oranges",
  "Grapes"
);

groceryList.displayItems(); // Grocery List: Apples, Bananas
groceryList.item1 = "Mangoes"; // Updating item1
groceryList.drinkCoffeePrivate()