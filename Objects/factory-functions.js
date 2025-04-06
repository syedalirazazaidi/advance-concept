// factory function
// A factory function is a function that returns an object
// Factory functions are useful when you want to create multiple objects with similar properties and methods.
// They allow you to create objects without using the `new` keyword or constructor functions.
// Factory functions are a way to create objects in JavaScript using functions. They can contain properties and methods.
// Example of a factory function
function createProgrammingLanguage(name, type) {
  return {
    name: name,
    type: type,
    callFunction: function () {
      console.log(`This is a ${this.type} called ${this.name}`);
    },
    drinkCoffee: function () {
      console.log("Drinking coffee...");
    },
  };
}
createProgrammingLanguage("JavaScript", "Scripting Language").callFunction(); // This is a Scripting Language called JavaScript
function createGroceryList(item1, item2, item3, item4) {
  return {
    item1: item1,
    item2: item2,
    item3: item3,
    item4: item4,
    displayItems: function () {
      console.log(`Grocery List: ${this.item1}, ${this.item2}`);
    },
  };
}

createGroceryList("Apples", "Bananas", "Oranges", "Grapes").displayItems(); // Grocery List: Apples, Bananas
createGroceryList(
  "Mangoes",
  "Pineapples",
  "Strawberries",
  "Blueberries"
).displayItems(); // Grocery List: Mangoes, Pineapples
createGroceryList("Pears", "Peaches", "Plums", "Cherries").item1; // Grocery List: Pears, Peaches

// Example of a factory function with a method that takes parameters
function createCalculator() {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      if (b === 0) {
        console.log("Cannot divide by zero");
        return null;
      }
      return a / b;
    },
  };
}
const calculator = createCalculator();
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
console.log(calculator.divide(5, 3)); // 1.6666666666666667
console.log(calculator.divide(5, 0)); // Cannot divide by zero
