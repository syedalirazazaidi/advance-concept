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
