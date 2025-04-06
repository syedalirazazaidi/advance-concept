// function are objects in JavaScript. They can be assigned to variables, passed as arguments to functions, and returned from other functions. This allows for powerful programming techniques such as higher-order functions and callbacks.

function Programmer(name, language) {
  this.name = name;
  this.language = language;
  this.callFunction = function () {
    console.log(`This is ${this.name} who is a ${this.language} programmer.`);
  };
}
function drinkCoffee(a, b) {
  console.log(`${a} is drinking coffee...`);
  console.log(`${b} is drinking coffee...`);
}
var b = drinkCoffee;
b("Alice", "Bob");
b("ali");
b("bob");
b("ali", "bob");
b("ali", "bob", "ali", "bob");
b("ali", "bob", "ali", "bob", "ali", "bob");

var programmer1 = new Programmer("Alice", "JavaScript");
var programmer2 = new Programmer("Bob", "Python");
programmer1.callFunction(); // This is Alice who is a JavaScript programmer.
programmer2.callFunction(); // This is Bob who is a Python programmer.
