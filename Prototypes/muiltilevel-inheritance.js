// multilevel inheritance
// // Multilevel inheritance is a type of inheritance where a class inherits from another class, which in turn inherits from another class, and so on.
// // This creates a chain of inheritance where the child class can access properties and methods from its parent class as well as its grandparent class.
// // In JavaScript, multilevel inheritance can be achieved using prototypes or classes.

// // In this example, we will create a base class called Animal, a derived class called Dog, and a further derived class called Puppy.
// // The Puppy class will inherit from the Dog class, which in turn inherits from the Animal class.
function Animal(name) {
  this.name = name;
  this.eat = function () {
    console.log(`${this.name} is eating.`);
  };
}
// // Base class
// // Super class
// // Parent class
// // Base class

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor with the current context
  this.breed = breed;
  this.bark = function () {
    console.log(`${this.name} is barking.`);
    console.log(`${this.breed} is barking.`);
  };
}
const dog = new Dog("Buddy", "Golden Retriever");
dog.eat(); // Buddy is eating.

const arra1 = [1, 2, 3, 4, 5];
const arra2 = [6, 7, 8, 9, 10];
const arra3 = [11, 12, 13, 14, 15];
const arra4 = [16, 17, 18, 19, 20];
