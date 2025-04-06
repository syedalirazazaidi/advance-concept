// private properties and methods are not accessible outside the constructor function
// // Example of a constructor function with a method that takes parameters

function DrinkmilkPrivate(item1, item2) {
  this.item1 = item1;
  this.item2 = item2;
  this.displayItems = function () {
    console.log(`Grocery List: ${this.item1}, ${this.item2}`);
  };
  //   // private method
  let drinkMilkPrivate = function () {
    console.log("Drinking milk...");
  };

  console.log("Drinking milk...");
}
const groceryList = new DrinkmilkPrivate("Apples", "Bananas");
groceryList.displayItems(); // Grocery List: Apples, Bananas

// closure example
function CreateCounter(count) {
  let count = 0; // private variable
  return {
    increment: function () {
      count++;
      console.log(count);
    },
  };
}
const counter = new CreateCounter(10);
counter.increment(); // 1


// closure vs  scope
function outerFunction() {
  let outerVariable = "I am outside!";
  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from innerFunction
  }
  return innerFunction;
}
const innerFunc = outerFunction(); // outerFunction returns innerFunction
innerFunc(); // I am outside!
