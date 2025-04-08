// Polymorphic behavior in JavaScript
// // // Polymorphism is a programming concept that allows objects of different classes to be treated as objects of a common superclass.
// // // It enables a single interface to represent different underlying forms (data types).
// // // In JavaScript, polymorphism can be achieved through method overriding and duck typing.
// // // Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
// // // Duck typing allows an object to be used in a context where it is expected to have certain properties or methods, regardless of its actual type.

// // // In this example, we will create a base class called Shape and two derived classes called Circle and Square.
// // // Each derived class will implement its own version of the area method, demonstrating polymorphic behavior.
function Shape() {
  this.area = function () {
    console.log("Calculating area...");
  };
}
// // Base class
// // Super class

function Circle(radius) {
  Shape.call(this); // Call the parent constructor with the current context
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius; // Circle area formula
  };
}

// // Derived class
// // Subclass

function Square(side) {
  Shape.call(this); // Call the parent constructor with the current context
  this.side = side;
  this.area = function () {
    return this.side * this.side; // Square area formula
  };
}
