//  getters and setters
//  getters and setters are special methods that allow you to define how properties of an object are accessed and modified
//  they are defined using the get and set keywords, respectively
//  getters are used to retrieve the value of a property, while setters are used to set the value of a property

function Drinkmilk(item1, item2) {
  this.item1 = item1;
  this.item2 = item2;
  // private method
  let drinkMilkPrivate = function () {
    console.log("Drinking milk...");
  };
  // getter method
  this.getItem1 = function () {
    return this.item1;
  };
  // setter method
  this.setItem1 = function (newItem) {
    this.item1 = newItem;
  };
}
const groceryList = new Drinkmilk("Apples", "Bananas");
console.log(groceryList.getItem1()); // Apples
groceryList.setItem1("Oranges");
console.log(groceryList.getItem1()); // Oranges

// please implemention validation for the setter method to ensure that the new value is a string and not empty
// if the validation fails, throw an error with a message indicating the issue
// if the validation passes, set the new value to the property
// example of a constructor function with a method that takes parameters

function Drinkmilk(item1, item2) {
  this.item1 = item1;
  this.item2 = item2;
  // private method
  let drinkMilkPrivate = function () {
    console.log("Drinking milk...");
  };
  // getter method
  this.getItem1 = function () {
    return this.item1;
  };
  // setter method with validation
  this.setItem1 = function (newItem) {
    if (typeof newItem !== "string" || newItem.trim() === "") {
      throw new Error("Invalid value: must be a non-empty string");
    }
    this.item1 = newItem;
  };
}