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
};
// Example usage:
let programmingLanguage = new constructure("JavaScript", {
  type: "Scripting Language",
  version: "ES6",
});
programmingLanguage.callFunction(); // This is a JavaScript with properties: [object Object]
programmingLanguage.properties.type = "Programming Language"; // Updating property
